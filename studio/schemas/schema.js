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
import settingsSitemap from './documents/settingsSitemap'

// Object types
import navigation from './objects/navigation/sub/navigation'
import navigationLink from './objects/navigation/sub/navigationLink'
import navigationSection from './objects/navigation/sub/navigationSection'

import gridLayout from './objects/gridLayout'

import analytics from './objects/link/analytics'
import internalLink from './objects/link/internalLink'
import externalLink from './objects/link/externalLink'
import link from './objects/link/link'
import linkList from './objects/link/linkList'

import solutions from './objects/home/solutions/solutions'
import solutionItems from './objects/home/solutions/solutionItems'

import backgroundColour from './objects/backgroundColour'
import altBackgroundColour from './objects/altBackgroundColour'

import youtube from './objects/pageBuilder/youtube'

import formBuilder from './objects/pageBuilder/forms/formBuilder'
import fieldset from './objects/pageBuilder/forms/fieldset'
import inputWidth from './objects/pageBuilder/forms/width'
import ariaAttributes from './objects/pageBuilder/forms/ariaAttributes'
import ariaItem from './objects/pageBuilder/forms/ariaItem'
import inputType from './objects/pageBuilder/forms/inputType'
import selectionType from './objects/pageBuilder/forms/selectionType'
import inputAttributes from './objects/pageBuilder/forms/inputAttributes'
import input from './objects/pageBuilder/forms/input'
import textarea from './objects/pageBuilder/forms/textarea'
import selection from './objects/pageBuilder/forms/selection'
import selectionItem from './objects/pageBuilder/forms/selectionItem'
import inputDate from './objects/pageBuilder/forms/inputDate'
import actions from './objects/pageBuilder/forms/actions'
import actionType from './objects/pageBuilder/forms/actionType'
import validation from './objects/pageBuilder/forms/validation'

import bodyCopy from './objects/pageBuilder/bodyCopy/bodyCopy'

import pagination from './objects/pageBuilder/pagination/pagination'

import subscribe from './objects/pageBuilder/subscribe/subscribe'

import hero from './objects/hero'

import linkBlock from './objects/pageBuilder/linkBlock/linkBlock'

import cards from './objects/pageBuilder/cards/card'
import cardItems from './objects/pageBuilder/cards/cardItems'

import charts from './objects/pageBuilder/charts/chart'

import tabs from './objects/pageBuilder/tabs/tabs'
import tabItem from './objects/pageBuilder/tabs/tabItem'

import accordion from './objects/pageBuilder/accordion/accordion'
import accordionItem from './objects/pageBuilder/accordion/accordionItem'

import topNav from './objects/navigation/main/topNav'
import topNavSection from './objects/navigation/main/topNavSection'

import sitemapNav from './objects/navigation/sitemap/sitemapNav'
import sitemapNavSection from './objects/navigation/sitemap/sitemapNavSection'
import sitemapNavLink from './objects/navigation/sitemap/sitemapNavLink'

import notificationBanner from './objects/pageBuilder/notificationBanner'

import portableText from './objects/portableText'
import excerptPortableText from './objects/excerptPortableText'

import formattedTitle from './objects/formattedTitle'

import divider from './objects/pageBuilder/divider'

// import mainImage from './objects/mainImage'

export default createSchema({
  name: 'HSE Schema',
  types: schemaTypes.concat([
    link,
    analytics,
    internalLink,
    externalLink,
    linkList,
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
    settingsSitemap,
    author,
    release,
    workflowMetadata,
    section,
    home,
    homepage,
    page,
    sitemapNav,
    sitemapNavSection,
    sitemapNavLink,
    topNav,
    topNavSection,
    navigation,
    navigationLink,
    navigationSection,
    hero,
    formBuilder,
    fieldset,
    validation,
    actions,
    actionType,
    ariaAttributes,
    ariaItem,
    inputDate,
    inputWidth,
    inputAttributes,
    inputType,
    selectionType,
    selection,
    selectionItem,
    input,
    textarea,
    bodyCopy,
    subscribe,
    cards,
    cardItems,
    linkBlock,
    charts,
    youtube,
    accordion,
    accordionItem,
    tabs,
    tabItem,
    notificationBanner,
    divider,
    pagination
    // mainImage
  ])
})
