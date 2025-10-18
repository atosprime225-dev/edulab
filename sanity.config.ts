import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Edulab CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_9yr8p8eo!, // défini dans .env.local
  dataset: 'production',
  basePath: '/studio', // URL du studio sur ton site
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
