export default {
  name: 'releases',
  type: 'document',
  fields: [
    {
      name: 'release_name',
      type: 'string',
    },
    {
      name: 'release_date',
      type: 'date',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
