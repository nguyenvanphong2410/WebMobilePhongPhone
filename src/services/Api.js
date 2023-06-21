import Http from "./Http";

//API dùng lấy sản phẩm
export const getProducts = (config) => {
    return Http.get("products", config);
} 

//API dùng lấy danh mục
export const getCategories = (config) => {
    return Http.get("categories", config);
}

//API lấy sản phẩm theo id
export const getProductCategory = (id, config) => {
    return Http.get(`categories/${id}/products`, config)
};

//API lấy tên từng danh mục sản phẩm theo id
export const getCategory = (id, config) => {
    return Http.get(`categories/${id}`, config)
};

// API Lấy chi tiết sản phẩm theo ID: 
export const getProduct = (id, config) => {
    return Http.get(`products/${id}`, config)
};

// API Thêm bình luận theo ID sản phẩm method POST
export const getCommentsProduct = (id, config) => {
    return Http.get(`products/${id}/comments`, config);
};

// API Thêm bình luận theo ID sản phẩm method POST: 
export const createCommentProduct = (id, data, config) => {
    return Http.post(`products/${id}/comments`, data, config)
};

//API Order
export const order = (data, config) => {
    return Http.post("order", data, config);
}