import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardSkeleton from '../components/CardSkeleton';
import Filterbar from '../components/Filterbar';

function Products() {
    const[products, setProducts] = useState([]);
    const [select, setSelect] = useState("All Products");
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // created two urls for products filtering purpose
    const apiUrl = select !== "All Products"
    ? `https://fakestoreapi.com/products/category/${select}`
    : 'https://fakestoreapi.com/products';
   // Fetch products from the API
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));

      
  }, [select]);

const handleClick = (category) =>{
    setSelect(category);
};

  return (
    <div>
      {/* <h1>Product List</h1> */}

      <Filterbar select={select} handleClick={handleClick}/>
      
      <div className='w-[90vw] mx-[5vw] flex flex-wrap'>
        {isLoading ? 
            <div className='w-full flex flex-wrap justify-around mx-auto'> 
                <CardSkeleton /> <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
            </div> : 
            products.map((product) => (

            <Card key={product.id} item={{
              key: product.id,
              src: product.image,
              name: product.title,
              price: product.price,
              cat: product.category,
              desc: product.description,
              rating: product.rating,
            }} />
        ))}
      </div>
    </div>
  );
}

export default Products;
