// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Workflow
import author from '../workflow/schema/author'
import release from '../workflow/schema/release'
import workflowMetadata from '../workflow/schema/workflow/metadata'

// document schemas
import page from './documents/pages'
import homepage from './documents/homepages'
import section from './documents/sections'
import settingsMeta from './documents/settingsMeta'
import settingsNavigation from './documents/settingsNavigation'
import settingsGlobals from './documents/settingsGlobals'

// Object types
import topNav from './objects/navigation/main/topNav'
import topNavSection from './objects/navigation/main/topNavSection'

import navigation from './objects/navigation/sub/navigation'
import navigationLink from './objects/navigation/sub/navigationLink'
import navigationSection from './objects/navigation/sub/navigationSection'
import bodyCopy from './objects/pageBuilder/bodyCopy/bodyCopy'
import form from './objects/pageBuilder/form'
import cards from './objects/pageBuilder/cards/card'
import cardItems from './objects/pageBuilder/cards/cardItems'
import notificationBanner from './objects/pageBuilder/notificationBanner'

import portableText from './objects/portableText'
import excerptPortableText from './objects/excerptPortableText'

// import mainImage from './objects/mainImage'

export default createSchema({
  name: 'HSE Schema',
  types: schemaTypes.concat([
    portableText,
    excerptPortableText,
    settingsMeta,
    settingsNavigation,
    settingsGlobals,
    author,
    release,
    workflowMetadata,
    section,
    homepage,
    page,
    topNav,
    topNavSection,
    navigation,
    navigationLink,
    navigationSection,
    bodyCopy,
    form,
    cards,
    cardItems,
    notificationBanner
    // mainImage
  ])
})
