// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Workflow
import author from '../workflow/schema/author'
import release from '../workflow/schema/release'
import workflowMetadata from '../workflow/schema/workflow/metadata'

// document schemas
import home from './documents/home'
import page from './documents/pages'
import homepage from './documents/homepages'
import section from './documents/sections'
import settingsMeta from './documents/settingsMeta'
import settingsNavigation from './documents/settingsNavigation'
import settingsGlobals from './documents/settingsGlobals'

// Object types
import navigation from './objects/navigation/sub/navigation'
import navigationLink from './objects/navigation/sub/navigationLink'
import navigationSection from './objects/navigation/sub/navigationSection'

import gridLayout from './objects/gridLayout'

import solutions from './objects/home/solutions/solutions'
import solutionItems from './objects/home/solutions/solutionItems'

import backgroundColour from './objects/backgroundColour'
import altBackgroundColour from './objects/altBackgroundColour'

import youtube from './objects/pageBuilder/youtube'

import bodyCopy from './objects/pageBuilder/bodyCopy/bodyCopy'

import subscribe from './objects/pageBuilder/subscribe/subscribe'

import hero from './objects/hero'

import form from './objects/pageBuilder/form'

import linkBlock from './objects/pageBuilder/linkBlock/linkBlock'

import cards from './objects/pageBuilder/cards/card'
import cardItems from './objects/pageBuilder/cards/cardItems'

import charts from './objects/pageBuilder/charts/chart'

import accordion from './objects/pageBuilder/accordion/accordion'
import accordionItem from './objects/pageBuilder/accordion/accordionItem'

import topNav from './objects/navigation/main/topNav'
import topNavSection from './objects/navigation/main/topNavSection'

import notificationBanner from './objects/pageBuilder/notificationBanner'

import portableText from './objects/portableText'
import excerptPortableText from './objects/excerptPortableText'

import formattedTitle from './objects/formattedTitle'

import divider from './objects/pageBuilder/divider'

// import mainImage from './objects/mainImage'

export default createSchema({
  name: 'HSE Schema',
  types: schemaTypes.concat([
    gridLayout,
    backgroundColour,
    altBackgroundColour,
    solutions,
    solutionItems,
    formattedTitle,
    portableText,
    excerptPortableText,
    settingsMeta,
    settingsNavigation,
    settingsGlobals,
    author,
    release,
    workflowMetadata,
    section,
    home,
    homepage,
    page,
    topNav,
    topNavSection,
    navigation,
    navigationLink,
    navigationSection,
    hero,
    bodyCopy,
    subscribe,
    form,
    cards,
    cardItems,
    linkBlock,
    charts,
    youtube,
    accordion,
    accordionItem,
    notificationBanner,
    divider
    // mainImage
  ])
})
