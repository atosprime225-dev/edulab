export default {
    name: 'post',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
        validation: (Rule: any) => Rule.required().min(3).max(100),
      },
      {
        name: 'content',
        title: 'Contenu',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'createdAt',
        title: 'Date de création',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  }
  