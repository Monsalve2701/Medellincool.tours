import { type SchemaTypeDefinition } from 'sanity'
import { tour } from './schemas/tour'
import { review } from './schemas/review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tour, review],
}
