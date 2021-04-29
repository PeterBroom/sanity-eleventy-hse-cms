const imageUrl = require('./imageUrl')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
module.exports = {
  types: {
    chart : props => props.node.language,
    cards: props => props.node.language,
    accordion: props => props.node.language,
    bodyCopy: (children) => {
      const blocks = children.node.editorInterface;
      const content = BlocksToMarkdown(blocks);
      return content;
    },
    notificationBanner: props => '```' + props.node.language + '\n' + props.node.code + '\n' + '```',
    mainImage: ({node}) => `![${node.alt}](${imageUrl(node).width(600).url()})`,

  },
  marks: {
    internalLink: ({mark, children}) => {
      const {slug = {}} = mark
      const href = `/${slug.current}`
      return `[${children}](${href})`
    },
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ?
        `<a href=${href} target="_blank" rel="noopener">${children}</a>`
        : `[${children}](${href})`
    }
  }
}
