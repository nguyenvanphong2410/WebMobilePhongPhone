import { Link, useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ pages }) => {

    //  Tính toán các thông số đầu vào cần thiết cho giai thuật phân trang
    const { total, limit, currentPage, hasNext, hasPrev, prev, next } = pages;

    //Lam tròn tổng số trang
    const totalPages = Math.ceil(total / limit);

    //useLocation() Lấy thông tin từ URL hiện tại
    const location = useLocation();

    //useSearchParams() Lấy thông tin từ URL hiện tại
    const [searchParams, setSearchParams] = useSearchParams();

    // Tạo ra cấu trúc URL để người dùng có thể click vào trang kết quả cần xem
    const formatUrl = (page) => {
        return `${location.pathname}?keyword=${searchParams.get("keyword")}&page=${page}`;
    }

    const renderPagesHTML = (delta = 2) => {
        const pages = [];  
        const left = currentPage - delta;
        const right = currentPage + delta;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === currentPage ||
                i === totalPages ||
                (i >= left && i <= right)
            ) {
                pages.push(i);
            }
        }
        return pages;
    }

    return (
        <>
            <ul className="pagination">
                {
                    hasPrev ?
                        <li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>
                        : null

                }
                {
                    renderPagesHTML().map((page, index) =>
                        <li
                            className={`page-item ${page === currentPage && 'active'}`}
                            key={index}
                        >
                            <Link
                                className="page-link"
                                to={formatUrl(page)}
                            >{page}
                            </Link>
                        </li>
                    )
                }

                {
                    hasNext ?
                        <li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>
                        : null

                }
            </ul>
        </>
    )
}

export default Pagination;