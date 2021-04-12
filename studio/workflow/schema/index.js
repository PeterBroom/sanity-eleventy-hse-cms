// import createSchema from 'part:@sanity/base/schema-creator'
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import workflow types
import workflowMetadata from './workflow/metadata'

// Import custom types
import author from './author'
import page from './page'
import release from './release'

// export default createSchema({
//   name: 'hse-review-workflow',
//   types: schemaTypes.concat([author, page, release, workflowMetadata])
// })

export default {author, page, release, workflowMetadata}
