
import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import axios from "axios";
import PropTypes from 'prop-types';
import "./markdown.scss"
export const MarkdownFile = ({ address }) => {

    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        const fetchMarkdownFile = async () => {
            try {
                if (address) {
                    const response = await axios.get(`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/${address}`);
                    setPostContent(response.data);
                }
            } catch (error) {
                console.error('Dosya alınırken bir hata oluştu:', error);
            }
        };

        fetchMarkdownFile();
    }, [address]);

    return (
        <div className="post-wrapper">
            <Markdown >
                {address ? (postContent) : ("")}
            </Markdown>
        </div>
    )
}

MarkdownFile.propTypes = {
    address: PropTypes.string.isRequired,
};