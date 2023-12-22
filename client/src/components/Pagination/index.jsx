import "./pagination.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Pagination = ({ page, pageSize, onPageChange }) => {
    return (
        <div className="pagination">
            <button className="button prev"
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
            >
                <GrPrevious />
                Önceki
            </button>
            <button className="button next" onClick={() => onPageChange(page + 1)}>
                Sonraki
                <GrNext />
            </button>
        </div>
    );
};