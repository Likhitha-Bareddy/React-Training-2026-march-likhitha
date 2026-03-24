'use client'
import { Product } from "@/models/Product";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

const url = "http://localhost:9000/products"

export default function EditProduct(){
    const params = useParams();
    // const [product, setProduct] = useState<Product>();

    async function fetchProductById(){
        const editUrl = url + "/" + params.id;
        try {
            const response = await axios.get<Product>(url);
            // setProduct(response.data);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    
    const product = fetchProductById();

    function handleEditProduct(){

    }

    // useEffect(
    //      () => {
    //         fetchProductById();
    //     }, []
    // )

    return (
        <div>
            <h4>Edit Product: {params.id}</h4>
            <br/>

            <form onSubmit={handleEditProduct}>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input 
                    // ref={usernameRef}
                    // autoFocus 
                    id="name" type="text" className="form-control" 
                        value={product.name}  />
                </div>

                
                <br />
                <button >Update</button>
                <button>Cancel</button>
            </form>

        </div>
    )
}