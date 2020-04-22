import { FaCog } from 'react-icons/fa'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FaCog,
  fields: [
    {
      name: 'title',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
}
