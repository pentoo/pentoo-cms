export default {
  name: 'faqItems',
  type: 'document',
  fields: [
    {
      name: 'question',
      type: 'string',
    },
    {
      name: 'answer',
      type: 'blockContent',
    },
  ],
}
