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
import section from './documents/sections'
import siteSettings from './documents/siteSettings'

// Object types
import navigation from './objects/navigation'
import navigationLink from './objects/navigationLink'
import navigationSection from './objects/navigationSection'
import bodyCopy from './objects/bodyCopy/bodyCopy'
import form from './objects/form'
import cards from './objects/cards'
// import mainImage from './objects/mainImage'

export default createSchema({
  name: 'HSE Schema',
  types: schemaTypes.concat([
    siteSettings,
    author,
    release,
    workflowMetadata,
    section,
    page,
    navigation,
    navigationLink,
    navigationSection,
    bodyCopy,
    form,
    cards
    // mainImage
  ])
})
