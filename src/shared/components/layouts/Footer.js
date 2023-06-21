const Footer = () => {
    return (
        <>

            <div id="footer-top">
                <div className="container">
                    <div className="row">
                        <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                            <h2><a href="#"><img src="images/rmlogophong.png" /></a></h2>
                            <p>
                                Điện thoại Phong Phone luôn luôn đặt vị thế khách hàng lên hàng đầu.
                                Chúng tôi mong muốn đem lại tất cả những giá trị tốt đẹp và hoàn hảo nhất đến trong từng sản phẩm tới khách hàng
                            </p>
                        </div>
                        <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Địa chỉ</h3>
                            <div>
                                <h5 id="h4-footer">Chi nhánh Miền Bắc</h5>
                                <i className="fa fa-map-marker" aria-hidden="true">
                                    Trâu Quỳ, Gia Lâm, Hà Nội</i><br />
                                <i className="fa fa-map-marker" aria-hidden="true">
                                    Lệ Xá, Tiên Lữ, Hưng Yên</i><br /><br />
                                <h5 id="h4-footer">Chi nhánh Miền Nam</h5>
                                <i className="fa fa-map-marker" aria-hidden="true">
                                    TPHCM: C5 Phạm Hùng, Bình Chánh</i><br />
                                <i className="fa fa-map-marker" aria-hidden="true">
                                    TPHCM: C2 Quận 2</i>
                            </div>

                        </div>
                        <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Dịch vụ</h3>
                            <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
                            <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
                        </div>
                        <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Liên hệ với chúng tôi</h3>
                            <p>Phone Sale: (+84) 0362800771</p>
                            <p>Email: phongham2410@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*	Footer	*/}
            <div id="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p>
                                @NguyenVanPhong - phongham2410@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*	End Footer	*/}
        </>
    )
}

export default Footer;