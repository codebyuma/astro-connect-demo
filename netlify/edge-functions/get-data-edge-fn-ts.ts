import type { Config, Context } from "@netlify/edge-functions";
import { query } from "@netlify/connect-client";
import { graphql } from "../../src/netlify-connect/graphql.ts";

const articleQuery = graphql(`
    query MyQuery {
        allUma123Article {
            nodes {
                id
                title
            }
        }   
    }
`);

export default async (req: Request, context: Context) => {
    const data = await query(articleQuery);
    return new Response(JSON.stringify(data));
}

export const config: Config = {
  path: "/get-data-ef-ts",
};