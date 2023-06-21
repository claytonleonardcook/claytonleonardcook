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

const experiencesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    url: z.string(),
    where: z.string(),
    when: z.object({
      start: z.string(),
      end: z.string(),
    }),
  }),
});

export const collections = {
  links: linksCollection,
  experience: experiencesCollection,
};
