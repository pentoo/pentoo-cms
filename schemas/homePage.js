export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fieldsets: [
    { name: 'internalUse', title: 'Internal Use' },
    { name: 'hero', title: 'Hero' },
  ],
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      fieldset: 'internalUse',
    },
    // {
    //   name: 'seo',
    //   title: 'SEO Stuff',
    //   type: 'seo',
    //   options: { collapsible: true, collapsed: true },
    // },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
