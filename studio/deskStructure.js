import S from '@sanity/desk-tool/structure-builder'
import {MdSettings} from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['siteSettings', 'page', 'navigation'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('section')
            .title('Home pages')
            .child(
              sectionId =>
                S.documentList()
                  .schemaType('page')
                  .title('Pages')
                  .filter(
                    // '_type == "page" && references($sectionId)'
                    '_type == "page" && $sectionId == belongsTo._ref'
                  )
                  .params({sectionId})
            )
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
