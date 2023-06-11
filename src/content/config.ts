import {z, defineCollection} from 'astro:content';

// const blogCollection = defineCollection({ /* ... */ });

const linksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    url: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  links: linksCollection,
};
