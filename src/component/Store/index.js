import React, {useState} from "react";
import {useEffect} from "react";

//https://fakestoreapi.com/products

const Store = () => {

    const [products, setProducts] = useState();
    const [input, setInput] = useState(1);
    const [newProduct, setNewProduct] = useState();

    useEffect(() => {
        console.log(input)
        fetch('https://fakestoreapi.com/products/'+input)
            .then(data => data.json()).then((json) => {
            setProducts(json)
        });
    }, [input])


    const addProduct = () => {
        fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json => setInput(json.id))
    }

    return(
        <>
            <input placeholder={'Type ID here'} onChange={(e) => {
                 setInput(e.target.value);
            }}/>
            <h1>{JSON.stringify(products)}</h1>
            <button onClick={addProduct}>Add Product</button>
        </>
    );
}

export default Store;