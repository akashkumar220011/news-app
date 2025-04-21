/* eslint-disable no-undef */
import React from 'react'

const NewsCards = ({article}) => {
  return (
    <div className='bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition'>
       {article.urlToImage && (
        <img src={article.urlToImage}
        alt={article.title}
        className='rounded-lg mb-4 h-48 w-full object-cover'/>
       )}
       <h2 className='text-xl font-semibold'>{article.title}</h2>
       <p className='text-sm text-gray-600 mt-2'>{article.description}</p>
       <a href={article.url} target='_blank' className='text-blue-500 mt-3 inline-block'>Read More</a>
    </div>
  )
}

export default NewsCards
