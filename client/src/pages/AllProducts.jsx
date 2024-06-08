import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import SortButtons from '../components/SortButtons';

function AllProducts({ products }) {
  console.log(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [sortKey, setSortKey] = useState('');

  // useEffect(() => {
  //   const uniqueCategories = [...new Set(products.map(product => product.category))];
  //   const uniqueCompanies = [...new Set(products.map(product => product.company))];
  //   setCategories(uniqueCategories);
  //   setCompanies(uniqueCompanies);
  //   setFilteredProducts(products);
  // }, [products]);

  // useEffect(() => {
  //   let filtered = [...products];

  //   if (selectedCategory) {
  //     filtered = filtered.filter(product => product.category === selectedCategory);
  //   }
  //   if (selectedCompany) {
  //     filtered = filtered.filter(product => product.company === selectedCompany);
  //   }
  //   if (sortKey) {
  //     filtered.sort((a, b) => {
  //       if (sortKey === 'price') return a.price - b.price;
  //       if (sortKey === 'rating') return b.rating - a.rating;
  //       if (sortKey === 'discount') return b.discount - a.discount;
  //       return 0;
  //     });
  //   }

  //   setFilteredProducts(filtered);
  // }, [selectedCategory, selectedCompany, sortKey, products]);

  return (
    <div>
      <h1>All Products</h1>
      {/* <Filters 
        categories={categories} 
        companies={companies} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        selectedCompany={selectedCompany} 
        setSelectedCompany={setSelectedCompany} 
      />
      <SortButtons setSortKey={setSortKey} /> */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default AllProducts;
