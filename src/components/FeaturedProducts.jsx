import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import CardSkeleton from './CardSkeleton';

function FeaturedProducts() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    
        fetch(`https://fakestoreapi.com/products?limit=8`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setIsLoading(false);
          })
          .catch((error) => console.error('Error fetching products:', error));
      }, []);

  return (
    <div className='m-4'>
        <h1 className='text-3xl font-bold'>Featured Products</h1>
        <div className='w-[90vw] mx-auto flex flex-wrap'>
        {isLoading ? 
            <div className='w-full flex flex-wrap justify-around mx-auto'> 
                <CardSkeleton /> <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
            </div> : 
            data.map((product) => (

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
        <div className='text-center text-lg font-semibold text-[#112ccae5]'>
            <Link to="/products">view all</Link>
        </div>
    </div>
  )
}

export default FeaturedProducts;