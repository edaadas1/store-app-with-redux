import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const Allproducts = await axios.get("https://fakestoreapi.com/products");
            setProducts(Allproducts.data)
        }

        getData()

    }, [])

    console.log(products)


    return (


        <div className='flex justify-between px-5 bg-gray-100 py-14'>
            <div className='flex flex-col w-[200px] px-5 mr-10'>
                <p className='font-bold mb-5'>CATEGORIES</p>
                <p className='mb-2'>Men's Clothing ({products.filter(product => product.category == "men's clothing").length})</p>
                <p className='mb-2'>Jewelery ({products.filter(product => product.category == "jewelery").length})</p>
                <p className='mb-2'>Electronics ({products.filter(product => product.category == "electronics").length})</p>
                <p>Women's Clothing ({products.filter(product => product.category == "women's clothing").length})</p>
            </div>

            <div className='flex flex-wrap w-3/4'>
                {
                    products.map((product) => (
                        <Link to={`detail/${product.id}`}>
                            <div key={product.id} className='w-[300px] h-[400px] flex flex-col items-center justify-evenly mb-14 mr-5 p-5 bg-white hover:shadow-lg hover:shadow-black/50 duration-300 rounded-xl hover:cursor-pointer' >
                                <img className='w-auto h-[200px]' src={product.image} alt="" width={100} />
                                <div className='w-auto h-[50px] text-center'>{product.title}</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
