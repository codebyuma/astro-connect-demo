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

export default async () => {
    const data = await query(articleQuery);
    return new Response(JSON.stringify(data));
}

export const config = {
  path: "/get-data-ef-js",
};