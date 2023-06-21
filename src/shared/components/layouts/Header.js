import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const totalCart = useSelector(({ Cart }) => {

        return Cart.items.reduce((total, item) => total + item.qty, 0);
    });

    //Hàm xử lí Change Input
    const onChangeInput = (e) => {
        setKeyword(e.target.value);
    }

    //Hàm xử lí Button Search
    const onClickButton = (e) => {
        //Chặn hành vi mặc định
        e.preventDefault();
        return navigate(`/Search?keyword=${keyword}`)
    }

    return (
        <>
            {/*	Header	*/}
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div id="logo" className="col-lg-4 col-md-3 col-sm-12">
                            <h1><Link to="/"><img className="img-fluid" src="images/rmlogophong.png" /></Link></h1>
                        </div>
                        <div id="search" className="col-lg-4 col-md-6 col-sm-12">
                            <form className="form-inline">
                                <input
                                    onChange={onChangeInput}
                                    className="form-control mt-3"
                                    type="search"
                                    placeholder="Tìm kiếm"
                                    aria-label="Search"
                                />
                                <button
                                    onClick={onClickButton}
                                    className="btn btn-danger mt-3"
                                    type="submit"
                                >
                                    <i className="fa fa-search" />
                                </button>
                            </form>
                        </div>
                        <div id="cart" className="col-lg-4 col-md-3 col-sm-12">
                            <i className="fa fa-cart-plus" />

                            <a className="mt-4 mr-2" href="#">
                                <span className="mt-3">{totalCart}</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
            {/*	End Header	*/}
        </>
    )
}

export default Header;