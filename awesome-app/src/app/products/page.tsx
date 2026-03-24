'use client'

import { Product } from "@/models/Product";
import axios from "axios";
import { useEffect, useState } from "react"
import styles from './products.module.css';

const url = "http://localhost:9000/products"

export default function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);

    async function fetchProducts() {
        try {
            const response = await axios.get<Product[]>(url);
            console.log(response);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }

   async function deleteProduct(product: Product){
        try{
            const deleteUrl = url + "/" + product.id
            await axios.delete(deleteUrl);
            // console.log(response);
            // if(response.status == 200){
            //     fetchProducts();
            // }
            // await fetchProducts();
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            copy_of_products.splice(index, 1);
            setProducts(copy_of_products);

        } catch(error){
            alert("Failed to Delete")
            console.log(error)
        }
    }

    useEffect(
        () => {
            fetchProducts();
        }, [])

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
                {products.map(product => {
                    return (
                        <div className={styles.product} key={product.id}>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Desc: {product.description}</p>
                            <div>
                                <button className="btn btn-warning" 
                                onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-info">Edit</button>

                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}