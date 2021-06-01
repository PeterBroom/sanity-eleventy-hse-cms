import {AiOutlineHome} from 'react-icons/ai'

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: AiOutlineHome,
  fields: [
    {
        name: 'popular',
        title: 'Popular',
        type: 'linkList'
    },
    {
        name: 'hero',
        title: 'Hero',
        type: 'hero'
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      description: 'Add components to your page to build up your content',
      of: [
        {
          type: 'cards'
        },
        {
          type: 'divider'
        }
      ]
    },
    {
      name: 'solutions',
      title: 'Solutions',
      type: 'solutions',
    }
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title Ascending',
      by: [
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'titleDesc',
      title: 'Title descending',
      by: [
        {
          field: 'title',
          direction: 'desc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      slug: 'slug'
    },
    prepare ({title = 'HSE Homepage'}) {
      return {
        title
      }
    }
  }
}
