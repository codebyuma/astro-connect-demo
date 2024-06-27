import type { Context } from "@netlify/functions"
import { query } from "@netlify/connect-client";
import { graphql } from "../../src/netlify-connect/graphql"; // Note this is a relative path 

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