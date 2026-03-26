'use client'
import { CartItem } from "@/models/CartItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { useEffect, useState } from "react";
import { removeCartItem } from "@/redux/gadgetsReducer";

function ViewCart(){

    const dispatch = useDispatch();
    // const [cart, setCart] = useState<CartItem[]>([]);
    // const gadgets = useSelector((state: AppState) => state.gadgets) || [];
    const cart = useSelector((state: AppState) => state.gadgets.cart) || [];
    
     
    // function getCartItems(){
    //     setCart(gadgets.cart || []);
    // }
   
    function remove(item: CartItem) {
        if(item.product.id){
            const action = removeCartItem(item.product?.id);
            dispatch(action);
            // getCartItems();
        }
        
    }
    // useEffect(
    //             () => {
                    
    //                getCartItems();
    //             }, []);

    return (
        <div>
            <h1>View Cart</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                   

                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );

}

export default ViewCart;