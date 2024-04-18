import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ExtendedSearchBar from './components/ExtendedSearchBar';
import PropertyListing from './components/PropertyListing';

function App() {
  // Sample data
  const properties = [
    {
      id: 1,
      title: 'Residential Apartment',
      description: '4700+ Properties',
      price: '$200,000',
      imageUrl: 'https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp',
    },
    {
      id: 2,
      title: 'Independent House/Villa',
      description: '920+ Properties',
      price: '$150,000',
      imageUrl: 'https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp',
    },
    {
      id: 3,
      title: 'Residential Land',
      description: '500+ Properties',
      price: '$500,000',
      imageUrl: 'https://static.99acres.com/universalhp/img/d_hp_property_type_3.webp',
    },
  ];

  const handleSearch = (searchParams) => {
    // Handle search functionality
    console.log(searchParams);
  };

  return (
    <div className="App">
      <Navbar />
      <ExtendedSearchBar onSearch={handleSearch} />
      <h1>Property Listings</h1>
      <PropertyListing properties={properties} />
    </div>
  );
}

export default App;