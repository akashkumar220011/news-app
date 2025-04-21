import React, { useEffect, useState } from 'react'
import NewsList from '../Components/NewsList'
import Navbar from '../Components/Navbar'
const Home = () => {

const API_KEY = "4b06336f530343128b4aeaa20babe766"

const [articals, setArticals] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
const fetchNews = async ()=>{
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        if(!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        setArticals(data.articles);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};
fetchNews();
},[]);
  return (
    <div className='container mx-auto px-4 py-6'>
    <Navbar/>
        {loading && <p className='text-gray-500'>Loading...</p>}
        {error && <p className='text-red-500'>Error: {error}</p>}
        {!loading && !error && <NewsList articals={articals}/>}
      
    </div>
  )
}

export default Home
