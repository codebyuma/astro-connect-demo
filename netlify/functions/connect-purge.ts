import { purgeCache } from "@netlify/functions";

export default async (req: Request) => {
  const body = await req.json();

  if (!body?.cacheTags?.length) {
    return new Response("No tags to purge", { status: 400 });
  }

  try {
    await purgeCache({
      tags: body.cacheTags,
    });
  } catch (error) {
    console.error(error);
  }
  
  return new Response("Purged!", { status: 202 });
};

export const config = {
  path: "/connect-purge",
};