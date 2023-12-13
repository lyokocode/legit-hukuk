import "./lawyerAbout.scss"
import { MarkdownFile } from "@/components";
import PropTypes from "prop-types";

export const LawyerAbout = ({ document }) => {

    return (
        <div className="lawyerDetail">
            <h1 className="title">Hakkında;</h1>


            <MarkdownFile
                address={`user/about/${document}`}
            />

        </div>
    )
}

LawyerAbout.propTypes = {
    document: PropTypes.string.isRequired,
};