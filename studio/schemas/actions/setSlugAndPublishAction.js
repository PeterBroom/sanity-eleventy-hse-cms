import {useState, useEffect} from 'react'
import {useDocumentOperation} from '@sanity/react-hooks'
import sanityClient from '@sanity/client'
import urlSlug from 'url-slug'

const sanityClientConfig = {
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  token: process.env.SANITY_STUDIO_API_TOKEN,
  useCdn: true
}

export default function SetSlugAndPublishAction (props) {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
  // if the isPublishing state was set to true and the draft has changed
  // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      setIsPublishing(true)

      const client = sanityClient(sanityClientConfig)

      let slug = urlSlug(props.draft.title)

      switch (props.type) {
        case 'page':
          const referenceNameType = 'section'
          const query = `*[_type == "${referenceNameType}" && _id == $nameRef][0] {slug}`
          let referenceName = props.draft.belongsTo._ref
          await client.fetch(query, {nameRef: referenceName}).then(section => {
            referenceName = !!section ? section.slug.current : referenceName
          })

          const pageTitle = urlSlug(props.draft.title)

          slug = `${referenceName}/${pageTitle}`
          patch.execute([{set: {name: slug.toLowerCase()}}])
          break

        default:
          /// Doing nothing? Consider deleting this switch statement to simplify the code.
          break
      }

      /// Set the slug field of this document
      patch.execute([{set: {slug: {_type: 'slug', current: slug.toLowerCase()}}}])

      // Perform the publish
      publish.execute()

      // Signal that the action is completed
      props.onComplete()
    }
  }
}
