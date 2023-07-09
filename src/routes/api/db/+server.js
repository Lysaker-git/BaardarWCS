import { NOTION_API, NOTION_DB } from '$env/static/private';
import { Client } from '@notionhq/client';

export const GET = async () => {
    const notion = new Client({
        auth: NOTION_API,
    });
    const response = await notion.databases.query({
        database_id: NOTION_DB,
        filter: {
          property: 'Status',
          select: {
            equals: 'Live',
          },
        },
      });
      return new Response(JSON.stringify({ body: { items: response.results } }), {status: 200 })    
}