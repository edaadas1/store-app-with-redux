import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProduct, totalPrice } from '../redux/productSlice';



const Detail = () => {

    const { id } = useParams();

    const [products, setProducts] = useState([]);


    useEffect(() => {

        const getData = async () => {
            const Allproducts = await axios.get("https://fakestoreapi.com/products");
            setProducts(Allproducts.data)
        }

        getData()

    }, [])

    const dispatch = useDispatch();

    const addCart = (productt) => {
        dispatch(addProduct(productt))
    }

    const product = useSelector(state => state.product.list)
    console.log("products", product);


    return (
        <div>
            {
                products.filter((product => product.id == id)).map((productt) => (
                    <div key={productt.id} className='flex flex-wrap container mx-auto max-w-6xl justify-between items-center mt-10'>
                        <img className='h-[200px]' src={productt.image} alt="" width={150} />
                        <div className='w-2/3 flex flex-col justify-evenly'>
                            <div className='font-bold'>{productt.title}</div>
                            <div className='mt-5'>{productt.description}</div>
                            <div className='flex mt-5'><p className='mr-3'>Price :</p>{productt.price}<p className='ml-2'>$</p></div>
                            <Link to={'/cart'}><button className='w-28 py-2 bg-green-400 mt-3' onClick={() => addCart(productt)} >Sepete Ekle</button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Detail
