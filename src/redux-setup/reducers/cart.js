import { ADD_TO_CART, DELETE__ITEM_CART, UPDATE_CART } from "../../shared/constants/action-type";

const initState = {
    items: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //Vì công việc phức tạp nên cần viết riêng ra 1 hàm addItem();
            return addItem(state, action.payload);

        case UPDATE_CART:
            return updateCart(state, action.payload);

        case DELETE__ITEM_CART:
            //Loại bỏ sản phẩm ra khỏi initState bên trên kia nên vẫn có state
            return deleteItemCart(state, action.payload);

        default:
            return state;
    }
}

const addItem = (state, payload) => {
    const items = state.items;
    let isProductExists = false;

    items.map((item) => {
        if (item._id === payload._id) {
            item.qty += payload.qty;
            isProductExists = true;
        }
        return item;
    });
    const newItems = isProductExists ? items : [...items, payload];

    // // Luu vao locol
    // localStorage.setItem("cart_items"), JSON.stringify(newItems);

    return { ...state, items: newItems };
}

// updateCart
const updateCart = (state, payload) => {
    const items = state.items;

    const newItems = items.map((item) => {
        if (item._id === payload._id) {
            item.qty = payload.qty;
        }
        return item;
    })
    return { ...state, items: newItems };
}

//deleteCart
const deleteItemCart = (state, payload) => {
    const newItems = state.items.filter((item) => {
        return item._id != payload._id;
    })
    return { ...state, items: newItems }
}