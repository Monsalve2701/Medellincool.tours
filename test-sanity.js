require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

async function main() {
  const tours = await client.fetch('*[_type == "tour"]{title, image}');
  console.log(JSON.stringify(tours, null, 2));
}

main().catch(console.error);
