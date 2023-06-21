import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Success from "./pages/Success";
import Page404 from "./pages/Page404";

import Header from "./shared/components/layouts/Header";
import Menu from "./shared/components/layouts/Menu";
import Slider from "./shared/components/layouts/Slider";
import Sidebar from "./shared/components/layouts/Sidebar";
import Footer from "./shared/components/layouts/Footer";

import { getCategories } from "./services/Api";
import { Provider } from "react-redux";
import store from "./redux-setup/store";


function App() {

  const [categories, setCategories] = React.useState([]);


  useEffect(() => {
    getCategories({}).then(({ data }) => {

      setCategories(data.data.docs)
    })

  }, [])

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/*	Body	*/}
            <div id="body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Menu
                      categories={categories}
                    />
                  </div>
                </div>
                <div className="row">
                  <div id="main" className="col-lg-12 col-md-12 col-sm-12">
                    <Slider />

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/Cart" element={<Cart />} />
                      <Route path="/Category-:id" element={<Category />} />
                      <Route path="/ProductDetails-:id" element={<ProductDetails />} />
                      <Route path="/Success" element={<Success />} />
                      <Route path="/Search" element={<Search />} />
                      <Route path="*" element={<Page404 />} />
                    </Routes>
                  </div>

                </div>
              </div>
            </div>
            {/*	End Body	*/}
            <Footer />
          </div>

        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
