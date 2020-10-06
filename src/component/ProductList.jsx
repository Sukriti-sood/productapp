import React ,{useEffect,useState} from "react";
import Product from "./productstr";
import eproducts from "./products";

function ProductList(){
  
        const [products,setProducts]=useState([]);
        useEffect(()=>{
            setProducts(eproducts)
        },[]);
        function handleupvote(productId) {
            const nextProducts = products.map((product) => {
                if (product.id === productId) {
                return Object.assign({}, product, {
                votes: product.votes + 1,
                });
                } else {
                return product;
                }
                });
                const sort_product=nextProducts.sort((a, b) => (
                    b.votes - a.votes
                    ));
                 setProducts(sort_product);
        }
    return(
    <>
    {products.map(product=>(
        <Product
                key={ product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submiturl={product.submitterAvatarUrl}
                imagurl={product.productImageUrl}
                onVote={handleupvote}
                />
    ))}
    </>
    )
}

export default ProductList;