import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";
import Pagination from "../../shared/components/panigation-item";

const Search = () => {

    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    //Khởi tạo limit
    const [pages, setPages] = useState({
        limit: 12,
    });

    const keyword = searchParams.get("keyword");
    const page = searchParams.get("page") || 1;

    useEffect(() => {
        getProducts({
            params: {
                name: keyword,
                page: page,
                limit: 12,
            }
        }).then(({ data }) => {
            setProducts(data.data.docs);
            setPages({ ...pages, ...data.data.pages });
        })
    }, [page,keyword]);

    return (
        <>
            <div>
                {/*	List Product	*/}
                <div className="products">
                    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{keyword}</span></div>
                    <div className="product-list card-deck">
                        {
                            products.map((product, index) =>
                                <ProductItem
                                    item={product}
                                    key={index}
                                />
                            )
                        }
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <Pagination pages={pages} />
                </div>
            </div>

        </>
    )
}

export default Search;