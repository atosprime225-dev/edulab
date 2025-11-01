import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ifhfi50n', // ton ID Sanity
  dataset: 'production',
  apiVersion: '2022-06-30',
  useCdn: false, // pour de meilleures perfs en lecture seule
})
