import React, { useEffect } from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";
import Sidebar from "../../shared/components/layouts/Sidebar";

const Home = () => {

    const [featureProducts, setFeatureProducts] = React.useState([]);
    const [latestProducts, setLatestProducts] = React.useState([]);

    useEffect(() => {

        //Lay Feature Product san pham noi bat
        getProducts({
            params: {
                limit: 9,
                "filter[is_featured]": true
            }

        }).then(({ data }) => setFeatureProducts(data.data.docs))

        //Lay Latest Product san pham moi nhat
        getProducts({
            params: {
                limit: 9,
            }

        }).then(({ data }) => setLatestProducts(data.data.docs))

    }, [])

    return (
        <>
           <div className="container"> 
           <div className="row">
            
            {/*	Feature Product	*/}
            <div className="products col-lg-8 col-md-12 col-sm-12">
                <h3 className="title-product">Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {
                        featureProducts.map((value, index) =>
                            <ProductItem
                                item={value}
                                key={index}
                            />
                        )
                    }


                </div>
            </div>
            {/*	End Feature Product	*/}
                    <Sidebar />
            {/*	Latest Product	*/}
            <div className="products col-lg-8 col-md-12 col-sm-12">
                <h3 className="title-product" >Sản phẩm mới</h3>
                <div className="product-list card-deck ">
                    {
                        latestProducts.map((value, index) =>
                            <ProductItem
                                item={value}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>

            {/*	End Latest Product	*/}
                 
            </div>
            </div>
        </>
    )
}

export default Home;