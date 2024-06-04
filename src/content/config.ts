import { defineCollection, z } from 'astro:content';

const membersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  })
})

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().optional(),
    intro: z.string(),
    img: z.string().optional()
  })
})

const showsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    link: z.string().optional()
  })
})

const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    youtube: z.string(),
    title: z.string(),
    location: z.string(),
    featured: z.boolean().optional(),
  })
})


export const collections = {
  'members': membersCollection,
  'pageData': pagesCollection,
  'shows': showsCollection,
  'videos': videosCollection,
}