import { Link, useNavigate, useParams } from "react-router-dom";
import { getImageProducts } from "../ultils";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../constants/action-type";
import React, { useEffect } from "react";
import { getProduct } from "../../services/Api";

const ProductItem = ({ item }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    //addToCart
    const addToCart = (type) => {
        if (item) {

            const product = onMouseOverProduct();

            const {_id, name, price, image} = product;

            dispatch({
                type: ADD_TO_CART,
                payload: {
                    _id,
                    name,
                    price,
                    image,
                    qty: 1,
                }
            });
        }
        if (type === "buy-now") {
            navigate("/Cart");
        }
    }

    // onMouseOverProduct
    const onMouseOverProduct = (e) => {
 
        const product1 = {
            _id: item._id,
            name: item.name,
            price: item.price,
            image: item.image,
        }

        return product1;
    }

    return (
        <>
            <div className="product-item card text-center" onMouseOver={onMouseOverProduct}>
                <Link to={`/ProductDetails-${item._id}`}><img src={getImageProducts(item.image)} /></Link>
                <h4><Link to={`/ProductDetails-${item._id}`}>{item.name}</Link></h4>
                <p>
                    Giá Bán:
                    <span>
                        {
                            new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            }).format(item.price)
                        }
                    </span>
                </p>
                <div id="add-cart">
                    <button
                        onClick={() => addToCart("buy-now")}
                        className="btn-buynow mr-2">
                        Mua
                    </button>

                    <button
                        onClick={addToCart}
                        onMouseOver={(e) => onMouseOverProduct(e)}
                        className="btn-addcart ">
                        <i class="fa fa-cart-plus" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductItem;