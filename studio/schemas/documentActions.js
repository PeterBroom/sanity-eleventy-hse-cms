import defaultResolve, {PublishAction} from 'part:@sanity/base/document-actions'
import SetSlugAndPublishAction from './actions/setSlugAndPublishAction.js'

/// Publish Actions
export default function useDocumentActions (props) {
/// Leave the code below commented out to run this action for all documents
/// Uncomment the code below to restrict this action to specific documents only
  if (['page'].indexOf(props.type) !== -1) {
    return defaultResolve(props).map((Action) =>
      Action === PublishAction ? SetSlugAndPublishAction : Action
    )
  }

  return defaultResolve(props)
}
