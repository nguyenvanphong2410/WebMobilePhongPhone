import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategory, getProductCategory } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Category = () => {

    const params =  useParams();
    const id = params.id; 
     
    const [products, setProducts] = React.useState([]);
    const [totalProduct, setTotalProduct] =  React.useState(0);
    const [category, setCategory] = React.useState(null);

    useEffect( () => {
        getProductCategory(id,{}).then(({data}) => {
            setTotalProduct(data.data.docs.length)
            setProducts(data.data.docs)
        })

        getCategory(id,{}).then(({data}) => setCategory(data.data));
    }, [id])

    return (
        <>
                {/*	List Product*/}
                <div className="products">
                    <h3>{category?.name} (hiện có {totalProduct} sản phẩm)</h3>
                    <div className="product-list card-deck">
                        {
                            products.map((product, index) => 
                                <ProductItem
                                    item = {product}
                                    key={index}
                                />
                            )
                        }
                    </div>
                </div>
                {/*	End List Product*/}
                <div id="pagination">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                    </ul>
                </div>
        </>
    )
}

export default Category;