import React from 'react'
import getYoutubeID from 'get-youtube-id'

const YoutubePreview = ({ value }) => {
  const id = getYoutubeID(value.url)
  const url = `https://www.youtube.com/embed/${id}`

  if (!id) {
    return <div>Missing YouTube URL</div>
  }

  return (
    <iframe
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube Embed',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YoutubePreview,
  },
}
