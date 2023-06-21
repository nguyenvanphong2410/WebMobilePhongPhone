import { persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";
import reducers from "./reducers";

const persistConfig = {
    //Key này cho bảo mật
    key: "redux-store",

    storage: storage,

    //Key này cho bảo mật
    keyPrefix: "PhongPhone:",
}

// const store = createStore(reducers);
const store = createStore(persistReducer(persistConfig, reducers));

//Dòng này lưu lên khi có bất cứ thay đổi
persistStore(store);

export default store;