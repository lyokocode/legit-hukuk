import "./pagination.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Pagination = () => {


    return (
        <div className="pagination">
            <button className="button prev"
            >
                <GrPrevious />
                Önceki
            </button>
            <button className="button next"
            >
                Sonraki
                <GrNext />
            </button>
        </div>
    );
};