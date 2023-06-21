import { useDispatch, useSelector } from "react-redux";
import { getImageProducts } from "../../shared/ultils";
import { DELETE__ITEM_CART, UPDATE_CART } from "../../shared/constants/action-type";
import React from "react";
import { useNavigate } from "react-router-dom";
import { order } from "../../services/Api";


const Cart = () => {

    const [inputs, setInput] = React.useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...inputs, [name]: value });
        // console.log(inputs);
    }


    const carts = useSelector(({ Cart }) => {
        return Cart.items;
    })

    const onClickOrder = (e) => {
        e.preventDefault();

        const items = carts.map((item) => ({ prd_id: item._id, qty: item.qty }));

        order({
            items,
            ...inputs,
        }).then(({ data }) => {
            // console.log(data);
            if (data.status === "success") {
                navigate("/Success");
            }
        });
    }

    //updateCart
    const updateCart = (e, _id) => {
        const val = parseInt(e.target.value)
        if (val >= 0) {
            dispatch({
                type: UPDATE_CART,
                payload: {
                    _id,
                    qty: val,
                }
            })
        }
        else {
            // eslint-disable-next-line no-restricted-globals
            const isConfirm = confirm("Xóa sản phẩm khỏi giỏi hàng ?");

            if (isConfirm) {
                dispatch({
                    type: DELETE__ITEM_CART,
                    payload: {
                        _id
                    }
                })
            } else {
                dispatch({
                    type: UPDATE_CART,
                    payload: {
                        _id,
                        qty: 1,
                    }
                })
            }
        }
    }

    //deleteItemCart
    const deleteItemCart = (e, _id) => {

        //Loại bỏ hành vi mặc định
        e.preventDefault();

        // eslint-disable-next-line no-restricted-globals
        const isConfirm = confirm("Xóa sản phẩm khỏi giỏi hàng ?");

        if (isConfirm) {
            dispatch({
                type: DELETE__ITEM_CART,
                payload: {
                    _id
                }
            })
        }
        else {
            return false;
        }

    }


    return (
        <>
            {/*	Cart	*/}
            <div id="my-cart">
                <div className="row">
                    <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
                    <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
                    <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
                </div>
                <form method="post">
                    {
                        carts.map((cart, index) =>
                            <div className="cart-item row" key={index}>
                                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                    <img src={getImageProducts(cart.image)} />
                                    <h4>{cart.name}</h4>
                                </div>
                                <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control form-blue quantity"
                                        value={cart.qty}
                                        onChange={(e) => updateCart(e, cart._id)}
                                    />
                                </div>
                                <div
                                    className="cart-price col-lg-3 col-md-3 col-sm-12"
                                >
                                    <b>
                                        {
                                            new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                                .format(cart.price)
                                        }
                                    </b>
                                    <a
                                        onClick={(e) => deleteItemCart(e, cart._id)}
                                        href="#"
                                    >Xóa</a></div>
                            </div>
                        )
                    }

                    <div className="row">
                        <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                        </div>
                        <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                        <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                            <b>
                                {

                                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                        .format(carts.reduce((total, item) => total + item.qty * item.price, 0))

                                }
                            </b>
                        </div>
                    </div>
                </form>
            </div>
            {/*	End Cart	*/}

            {/*	Customer Info	*/}
            <div id="customer">
                <form method="post">
                    <div className="row">
                        <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                            <input
                                onChange={onChangeInput}
                                value={inputs?.name}
                                placeholder="Họ và tên (bắt buộc)"
                                type="text"
                                name="name"
                                className="form-control"
                                required
                            />
                        </div>
                        <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                            <input
                                onChange={onChangeInput}
                                value={inputs?.phone}
                                placeholder="Số điện thoại (bắt buộc)"
                                type="text"
                                name="phone"
                                className="form-control"
                                required
                            />
                        </div>
                        <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                            <input
                                onChange={onChangeInput}
                                value={inputs?.email}
                                placeholder="Email (bắt buộc)"
                                type="text"
                                name="email"
                                className="form-control"
                                required
                            />
                        </div>
                        <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                            <input
                                onChange={onChangeInput}
                                value={inputs?.address}
                                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                                type="text"
                                name="address"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="by-now col-lg-6 col-md-6 col-sm-12">
                        <a onClick={(e) => onClickOrder(e)} href="#">
                            <b>Mua ngay</b>
                            <span>Giao hàng tận nơi siêu tốc</span>
                        </a>
                    </div>
                    <div className="by-now col-lg-6 col-md-6 col-sm-12">
                        <a href="#">
                            <b>Trả góp Online</b>
                            <span>Vui lòng call (+84) 0988 550 553</span>
                        </a>
                    </div>
                </div>
            </div>
            {/*	End Customer Info	*/}

        </>
    )
}

export default Cart;