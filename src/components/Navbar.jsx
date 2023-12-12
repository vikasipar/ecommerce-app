import React, {useState} from 'react';
import { BsCart3 } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Navbar() {
    // const [category, setCategory] = useState("");
    // console.log(category);
    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const selectedCategory = e.target.value;
    //     setCategory(selectedCategory);
    //     console.log(selectedCategory);
    //     navigate(`/products/${selectedCategory}`);
    // };

  return (
    <div className='w-[98%] mx-auto mb-5 my-1 flex justify-between items-baseline'>
        <div className='w-[30%] font-bold text-3xl'>Logo</div>
        <div className='w-[55%] flex justify-between items-center font-semibold'>
            <div className='w-[60%] flex justify-around text-stone-600'>
                <Link to={'/products'} ><span>Home</span></Link>
                <Link to={'/products'} ><span>Categories</span></Link>
                {/* <select onChange={handleChange} className='border-2 border-stone-200'>
                        <option value="All Products">Categories</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                </select> */}
                <span>About</span>
            </div>
            <div className='w-[10%] flex justify-around'>
                <BsCart3 />
                <LuUserCircle />

            </div>
        </div>
    </div>
  )
}

export default Navbar;