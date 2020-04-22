export default {
  name: 'faqs',
  type: 'document',
  fields: [
    {
      name: 'faqs',
      type: 'array',
      of: [
        {
          name: 'faqItems',
          type: 'faqItems',
        },
      ],
    },
  ],
}
