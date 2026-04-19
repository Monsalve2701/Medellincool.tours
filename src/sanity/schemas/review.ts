export const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    { name: 'author', title: 'Author Name', type: 'string' },
    { name: 'date', title: 'Review Date', type: 'date' },
    { name: 'rating', title: 'Rating (out of 5)', type: 'number' },
    { name: 'text', title: 'Review Text', type: 'text' },
    { 
      name: 'tour', 
      title: 'Related Tour', 
      type: 'reference', 
      to: [{ type: 'tour' }] 
    }
  ]
};
