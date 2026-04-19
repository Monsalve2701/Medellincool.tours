export const tour = {
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'rating', title: 'Rating / Rating Score', type: 'number' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'duration', title: 'Duration', type: 'string', description: 'E.g. 4 Hours' },
    { 
      name: 'gallery', 
      title: 'Gallery Images', 
      type: 'array', 
      of: [{ type: 'image', options: { hotspot: true } }] 
    }
  ]
};
