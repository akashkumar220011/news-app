import React from 'react'
import NewsCards from './NewsCards'
const NewsList = ({articals}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {articals.map((article, index)=>(
        <NewsCards key={index} article={article}/>
  ))};
    </div>
  )
}

export default NewsList
