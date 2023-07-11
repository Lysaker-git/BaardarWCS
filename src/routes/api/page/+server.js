import { NOTION_API, NOTION_DB } from '$env/static/private';
import { Client } from '@notionhq/client';

async function returnPage(id, notion) {
  const response = await notion.blocks.children.list({
    block_id: id,
    page_size: 20,
  });
  const result = response.results;
  return result;
}

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
  const results = response.results;
  const finalObject = await Promise.all(
    
    results.map(async (result) => {
        try {
          const page = await returnPage(result.id, notion);
      
          const { Language, Level, Name, Link } = result.properties;
          const language = Language?.select.name;
      
          page.details = {
            Level: Level?.select.name,
            Name: Name?.title[0].plain_text,
            Url: Link?.url,
          };
      
          page[0].Language = language;
          page[1].Language = language;
      
          return page;
        } catch (error) {
          console.log('Error occurred:', error);
        }
      }) 
);

  return new Response(JSON.stringify({ body: finalObject }));
};
