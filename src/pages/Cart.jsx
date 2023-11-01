import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProduct } from "../redux/productSlice"

const Cart = () => {

    const cartItems = useSelector(state => state.product.list)
    console.log("cartItems", cartItems)

    const dispact = useDispatch();

    var price = 0;

    return (
        <div className="flex flex-col container mx-auto max-w-6xl mt-10">


            {
                cartItems.length > 0 ?

                    cartItems.map((item) => {
                        price += item.price
                    })

                    : null
            }


            {
                cartItems.length > 0 ?

                    <div>
                        <p className="font-bold">Total Price : {price}</p>
                    </div>
                    : null
            }



            {

                cartItems.length > 0 ?
                    cartItems.map((cartitem) => (
                        <div key={cartitem.id} className="flex justify-between container mx-auto max-w-6xl mt-10">
                            <img className='h-[200px]' src={cartitem.image} alt="" width={150} />
                            <div className='w-2/3 flex flex-col justify-evenly'>
                                <div className='font-bold'>{cartitem.title}</div>
                                <div>{cartitem.description}</div>
                                <div className='flex'><p className='mr-3'>Price :</p>{cartitem.price}<p className='ml-2'>$</p></div>
                            </div>
                            <div className="mt-20">
                                <button className="bg-red-500 text-white py-2 px-8" onClick={() => dispact(deleteProduct(cartitem.id))}>DELETE</button>
                            </div>
                        </div>
                    ))
                    :
                    <div className="flex flex-col justify-center items-center mt-[200px]">
                        <p className="text-center text-3xl mb-10">THERE ARE NO PRODUCTS IN THE CART</p>
                        <Link to={"/"}><p className="py-5 px-10 font-bold bg-black text-white hover:bg-red-500 duration-500">BROWSE PRODUCTS</p></Link>
                    </div>
            }
        </div>
    )
}

export default Cart
