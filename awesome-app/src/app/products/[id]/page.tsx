'use client'
import { Product } from "@/models/Product";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

const url = "http://localhost:9000/products"

export default function EditProduct(){
    const params = useParams();
    const [product, setProduct] = useState(new Product(0, "",0,""));
    const router = useRouter();

    async function fetchProductById(){
        const editUrl = url + "/" + params.id;
        try {
            const {data} = await axios.get<Product>(editUrl);
            // setProduct(response.data);
            // console.log(response);
            // return response.data;
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    async function handleEditProduct(evt: MouseEvent<HTMLButtonElement>){
        evt.preventDefault();
        try{
            await axios.put(url + "/" + product.id, product);
            router.back();
        }catch (error){
           console.log(error);
           alert("Failed to Save");
        }
    }

    async function handleCancel(evt: MouseEvent<HTMLButtonElement>){
         evt.preventDefault();
         router.back();
    }

    useEffect(
         () => {
            fetchProductById();
        }, []
    )

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        // const value = evt.target.value;
        // const copy = {...product};
        // copy.name = value;
        // setProduct(copy);
        setProduct({...product, name: evt.target.value});
    }

    return (
        <div>
            <h4>Edit Product: {params.id}</h4>
            <br/>

            <form>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input 
                    // ref={usernameRef}
                    // autoFocus 
                    onChange={evt => setProduct({...product, name: evt.target.value})}
                    id="name" type="text" className="form-control" 
                        value={product.name}  />
                </div>
                <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input 
                    // ref={usernameRef}
                    // autoFocus 
                    onChange={evt => setProduct({...product, price: evt.target.valueAsNumber})}
                    id="price" type="number" className="form-control" 
                        value={product.price}  />
                </div>
                
                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <input  
                    onChange={evt => setProduct({...product, description: evt.target.value})}
                    id="description" type="text" className="form-control" 
                        value={product.description}  />
                </div>

                
                <br />
                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>&nbsp;
                <button className="btn btn-primary" onClick={handleEditProduct}>Save</button>
            </form>

        </div>
    )
}