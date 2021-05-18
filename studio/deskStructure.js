import S from '@sanity/desk-tool/structure-builder'
import {AiFillSetting, AiFillDatabase, AiFillLayout, AiOutlineHome, AiFillHome, AiFillFileText} from 'react-icons/ai'
import {GoThreeBars} from 'react-icons/go'
import {RiGlobeFill} from 'react-icons/ri'
import {workflowListItems} from './workflow/structure/workflow'

const hiddenDocTypes = listItem =>
  !['settingsMeta', 'settingsNavigation', 'settingsGlobals', 'section', 'home', 'homepage', 'page', 'divider', 'navigation', 'topNav', 'workflow.metadata', 'author', 'release'].includes(listItem.getId())

const docTypeListItems = S.documentTypeListItems().filter(hiddenDocTypes)

export default () =>
  S.list()
    .title('Content')
    .items([...workflowListItems, ...docTypeListItems])
    .items([
      S.listItem()
        .title('Settings')
        .icon(AiFillSetting)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Globals')
                .icon(RiGlobeFill)
                .child(
                  S.document()
                    .schemaType('settingsGlobals')
                    .documentId('settingsGlobals')
                ),
              S.listItem()
                .title('Metadata')
                .icon(AiFillDatabase)
                .child(
                  S.document()
                    .schemaType('settingsMeta')
                    .documentId('settingsMeta')
                ),
                S.listItem()
                .title('Navigation')
                .icon(GoThreeBars)
                .child(
                  S.document()
                    .schemaType('settingsNavigation')
                    .documentId('settingsNavigation')
                )
            ])
        ),
      S.listItem()
        .id('hse-home-page')
        .title('HSE Home page')
        .icon(AiOutlineHome)
          .child(
            S.editor()
            .schemaType('home')
            .documentId('home')
          ),
      S.listItem()
        .title('Content sections')
        .icon(AiFillLayout)

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
        .icon(AiFillHome)
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
        .icon(AiFillFileText)
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
                  .child(pageId =>
                    S.documentList()
                      .schemaType('page')
                      .title('Sub pages')
                        .filter(
                          '_type == "page" && $pageId == belongsTo._ref'
                        )
                        .params({pageId})
                      )
                )
              )
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
