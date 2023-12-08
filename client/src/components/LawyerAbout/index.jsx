import "./lawyerAbout.scss"
import { MarkdownFile } from "@/components";

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
