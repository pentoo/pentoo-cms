export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Hero' },
    { name: 'internalUse', title: 'Internal Use' },
  ],
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      fieldset: 'internalUse',
    },
    {
      name: 'slug',
      type: 'slug',
      fieldset: 'internalUse',
      options: {
        source: 'pageTitle',
        maxLength: 96,
      },
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    // {
    //   name: 'section',
    //   type: 'array',
    //   title: 'Content Sections',
    //   of: [
    //     {
    //       type: 'object',
    //       type: 'section',
    //     },
    //   ],
    // },
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
}
