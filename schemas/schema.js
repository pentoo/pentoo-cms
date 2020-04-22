// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

import author from './author'
import category from './category'
import faqs from './faqs'
import faqItems from './faqItems'
import homePage from './homePage'
import menu from './menuItems'
import menuPages from './menuPages'
import page from './page'
import post from './post'
import releases from './realeases'
import siteSettings from './siteSettings'
import youtube from './youtube'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    category,
    faqs,
    faqItems,
    homePage,
    menu,
    menuPages,
    page,
    post,
    releases,
    siteSettings,
    youtube,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
