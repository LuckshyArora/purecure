import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://example.com/search?q=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for products"
        className="search-input"
      />
      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="search-result">
            <img src={result.image} alt={result.name} />
            <h2>{result.name}</h2>
            <p>{result.description}</p>
            <p className="price">${result.price}</p>
            <Link to={`/products/${result.id}`} className="button">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;