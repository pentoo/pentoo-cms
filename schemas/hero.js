export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',
    },
    {
      name: 'hero_img',
      title: 'Hero Image',
      type: 'image',
    },
  ],
}
