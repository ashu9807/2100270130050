// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
// import AllProducts from './pages/AllProducts';
// import ProductDetails from './components/ProductList';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [data, setData] = useState([
//     {
//       "productName": "Laptop 1",
//       "price": 2236,
//       "rating": 4.86,
//       "discount": 63,
//       "availability": "out-of-stock"
//     },
//     {
//       "productName": "Laptop 10",
//       "price": 7145,
//       "rating": 4.72,
//       "discount": 15,
//       "availability": "out-of-stock"
//     },
//     {
//       "productName": "Laptop 8",
//       "price": 511,
//       "rating": 4.64,
//       "discount": 87,
//       "availability": "yes"
//     },
//     {
//       "productName": "Laptop 3",
//       "price": 9102,
//       "rating": 4.6,
//       "discount": 98,
//       "availability": "out-of-stock"
//     },
//     {
//       "productName": "Laptop 10",
//       "price": 4101,
//       "rating": 4.52,
//       "discount": 37,
//       "availability": "out-of-stock"
//     },
//     {
//       "productName": "Laptop 14",
//       "price": 9254,
//       "rating": 4.23,
//       "discount": 56,
//       "availability": "yes"
//     },
//     {
//       "productName": "Laptop 11",
//       "price": 5683,
//       "rating": 3.63,
//       "discount": 56,
//       "availability": "out-of-stock"
//     },
//     {
//       "productName": "Laptop 13",
//       "price": 8686,
//       "rating": 3.6,
//       "discount": 24,
//       "availability": "yes"
//     },
//     {
//       "productName": "Laptop 13",
//       "price": 1244,
//       "rating": 3.17,
//       "discount": 45,
//       "availability": "yes"
//     },
//     {
//       "productName": "Laptop 1",
//       "price": 8521,
//       "rating": 2.32,
//       "discount": 91,
//       "availability": "out-of-stock"
//     }
//   ]);

//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     try {
//   //       const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=18000', {
//   //         headers: {
//   //           Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI0NDg3LCJpYXQiOjE3MTc4MjQxODcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJiNWVjYWU1LWJmYTAtNGQzNC04NzBkLTFlNjkyYmE0ZDNhOCIsInN1YiI6Imd1cHRhYXNodXRvc2g1ODRAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJiYjVlY2FlNS1iZmEwLTRkMzQtODcwZC0xZTY5MmJhNGQzYTgiLCJjbGllbnRTZWNyZXQiOiJHYmN3ZkhXbGNObVFqRUJEIiwib3duZXJOYW1lIjoiQXNodXRvc2ggR3VwdGEiLCJvd25lckVtYWlsIjoiZ3VwdGFhc2h1dG9zaDU4NEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwMjcwMTMwMDUwIn0.UH_533WAlIbD477VFfDmFjEtSMWxkzMhtyrQWGoA0vo"
//   //         }
//   //       });
//   //       setData(response.data);
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };
//   //   fetchProducts();
//   // }, []);

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route exact path="/" render={() => <AllProducts products={data} />} />
//           <Route path="/product/:id" component={ProductDetails} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import './App.css';

const initialData = [
  { "productName": "Laptop 1", "price": 2236, "rating": 4.86, "discount": 63, "availability": "out-of-stock" },
  { "productName": "Laptop 10", "price": 7145, "rating": 4.72, "discount": 15, "availability": "out-of-stock" },
  { "productName": "Laptop 8", "price": 511, "rating": 4.64, "discount": 87, "availability": "yes" },
  { "productName": "Laptop 3", "price": 9102, "rating": 4.6, "discount": 98, "availability": "out-of-stock" },
  { "productName": "Laptop 10", "price": 4101, "rating": 4.52, "discount": 37, "availability": "out-of-stock" },
  { "productName": "Laptop 14", "price": 9254, "rating": 4.23, "discount": 56, "availability": "yes" },
  { "productName": "Laptop 11", "price": 5683, "rating": 3.63, "discount": 56, "availability": "out-of-stock" },
  { "productName": "Laptop 13", "price": 8686, "rating": 3.6, "discount": 24, "availability": "yes" },
  { "productName": "Laptop 13", "price": 1244, "rating": 3.17, "discount": 45, "availability": "yes" },
  { "productName": "Laptop 1", "price": 8521, "rating": 2.32, "discount": 91, "availability": "out-of-stock" }
];

function App() {
  const [data, setData] = useState(initialData);
  console.log(data);
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" render={() => <AllProducts products={data} />} />
          <Route path="/product/:id" render={(props) => <ProductDetails {...props} products={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
