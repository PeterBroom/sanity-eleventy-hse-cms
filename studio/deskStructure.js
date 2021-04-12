import S from '@sanity/desk-tool/structure-builder'
import {MdSettings} from 'react-icons/md'
import {workflowListItems} from './workflow/structure/workflow'

const hiddenDocTypes = listItem =>
  !['siteSettings', 'page', 'navigation', 'workflow.metadata', 'author', 'release'].includes(listItem.getId())

const docTypeListItems = S.documentTypeListItems().filter(hiddenDocTypes)

export default () =>
  S.list()
    .title('Content')
    .items([...workflowListItems, ...docTypeListItems])
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
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('section')
            .schemaType('section')
            .title('Home pages')
            .child(sectionId =>
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
