import React, { useEffect, useState } from "react";
import NewsList from "../Components/NewsList";
import Navbar from "../Components/Navbar";
const Home = () => {
    
  const [articals, setArticals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "4b06336f530343128b4aeaa20babe766";
  const categories = ['general', 'technology', 'sports', 'business', 'health','science', 'entertainment'];

const fetchNews= async()=>{
    setLoading(true);
    setError(null);

    let url = '';
    if(searchTerm.trim()){
        console.log("search:",searchTerm);
        
        url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`;
    } else{
        console.log("category:",searchTerm,category);
        
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    }

    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        setArticals(data.articles || []);
    } catch(err){
        setError(err.message);
    }
    finally{
        setLoading(false);
    }

}
  useEffect(() => {
   
    fetchNews();
  }, [category,searchTerm]);{/** refetch when category change */}

const handleSearch =()=>{
    if(searchTerm.trim!== ''){
        fetchNews();
    }
};
const handleKeyDown = (e)=>{
    if(e.key ==='Enter') handleSearch();
};





  return (
    <div className="container mx-auto px-4 py-6">
      {/*Search Input */}
      <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
        <button
        onClick={handleSearch}
         className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat)=>(
            <button key={cat} onClick={()=>{
                setCategory(cat);
                setSearchTerm('');
            }}
            className={`px-4 py-2 rounded-full text-sm border ${
                category === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              } hover:bg-blue-100 dark:hover:bg-gray-700 transition`}
            >{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
        ))}
        
      </div>
      {/* Content */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <NewsList articals={articals} />}

    </div>
  );
};

export default Home;
