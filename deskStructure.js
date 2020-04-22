import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      // main menu items
      S.listItem()
        .title('Main Menu')
        .child(
          S.editor()
            .title('Main Menu Items')
            .id('main_menu')
            .schemaType('main_menu')
            .documentId('main_menu')
        ),

      // home page
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .title('Home Page Content')
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        ),

      // Generic Pages
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page').title('Pages')),

      // Posts
      S.listItem()
        .title('Posts')
        .child(S.documentTypeList('post').title('Posts')),

      // Faqs
      S.listItem()
        .title('FAQs')
        .child(
          S.editor()
            .title('Main Menu Items')
            .id('faqs')
            .schemaType('faqs')
            .documentId('faqs')
        ),

      // S.listItem()
      //   .title('Press Articles')
      //   .child(
      //     S.documentList()
      //       .title('Press Articles')
      //       .menuItems(S.documentTypeList('post').getMenuItems())
      //       // .filter("_type == $type && section_id == $id")
      //       .filter('_type == $type && !defined(parents)')
      //       .params({ type: 'post' })
      //   ),
    ])
