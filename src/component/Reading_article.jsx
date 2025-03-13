import React from 'react'
import { Usedata } from './ContextAPI'

const Reading_article = () => {
    const Article =Usedata()
  return (
    <div>
        {Article.title}
      
    </div>
  )
}

export default Reading_article
