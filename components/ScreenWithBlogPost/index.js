import React from 'react'
import Screen from '../Screen'
import { blogPosts } from '../../pages/blog'

const ScreenWithBlogPost = ({ id, sections }) => (
  <Screen
    baseRouteKey="blog"
    mainVisual={blogPosts[id].mainVisual}
    pathname={`https://trevordmiller.com/blog/${id}`}
    title={blogPosts[id].title}
    description={blogPosts[id].description}
    tags={blogPosts[id].tags}
    sections={sections}
  />
)

export default ScreenWithBlogPost
