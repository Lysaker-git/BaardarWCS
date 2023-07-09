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
      const page = await returnPage(result.id, notion);
      const language = result.properties.Language.select.name;
      page[0].Language = language;
      page[1].Language = language;
      return page;
    })
  );

  return new Response(JSON.stringify({ body: finalObject }));
};
