import S from '@sanity/desk-tool/structure-builder'
import {MdSettings} from 'react-icons/md'
import {workflowListItems} from './workflow/structure/workflow'

const hiddenDocTypes = listItem =>
  !['settingsMeta', 'settingsNavigation', 'settingsGlobals', 'section', 'homepage', 'page', 'navigation', 'topNav', 'workflow.metadata', 'author', 'release'].includes(listItem.getId())

const docTypeListItems = S.documentTypeListItems().filter(hiddenDocTypes)

export default () =>
  S.list()
    .title('Content')
    .items([...workflowListItems, ...docTypeListItems])
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Globals')
                .child(
                  S.document()
                    .schemaType('settingsGlobals')
                    .documentId('settingsGlobals')
                ),
              S.listItem()
                .title('Metadata')
                .child(
                  S.document()
                    .schemaType('settingsMeta')
                    .documentId('settingsMeta')
                ),
                S.listItem()
                .title('Navigation')
                .child(
                  S.document()
                    .schemaType('settingsNavigation')
                    .documentId('settingsNavigation')
                )
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Content sections')
        .child(
          S.documentList('section')
            .schemaType('section')
            .title('Content sections')
            .filter(
              '_type == "section"'
            )
        ),
      S.listItem()
        .title('Content homepages')
        .child(
          S.documentList('homepage')
            .schemaType('homepage')
            .title('Content homepages')
            .filter(
              '_type == "homepage"'
            )
        ),
      S.listItem()
        .title('Content pages')
        .child(
          S.documentList('section')
            .schemaType('section')
            .title('Sections')
            .filter(
              '_type == "section"'
            )
              .child(sectionId =>
                S.documentList()
                  .schemaType('homepage')
                  .title('Home pages')
                  .filter(
                    '_type == "homepage" && $sectionId == belongsTo._ref'
                  )
                  .params({sectionId})
                .child(homepageId =>
                  S.documentList()
                    .schemaType('page')
                    .title('Pages')
                    .filter(
                      '_type == "page" && $homepageId == belongsTo._ref'
                    )
                    .params({homepageId})
                )
              )
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
