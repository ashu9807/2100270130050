import React from 'react';

function Filters({ categories, companies, selectedCategory, setSelectedCategory, selectedCompany, setSelectedCompany }) {
  return (
    <div>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
        <option value="">All Companies</option>
        {companies.map((company, index) => (
          <option key={index} value={company}>{company}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
