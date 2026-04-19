import { groq } from 'next-sanity';

export const allToursQuery = groq`
  *[_type == "tour"] {
    "id": _id,
    title,
    "slug": slug.current,
    "image": gallery[0],
    description,
    duration,
    price,
    location,
    rating,
    reviews,
    "tags": tags[],
    "gallery": gallery[]
  }
`;

export const tourBySlugQuery = groq`
  *[_type == "tour" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    "image": gallery[0],
    description,
    duration,
    price,
    location,
    rating,
    reviews,
    "tags": tags[],
    "gallery": gallery[]
  }
`;
