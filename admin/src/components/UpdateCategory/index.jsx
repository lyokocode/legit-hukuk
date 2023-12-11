import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md"
import "./updateCategory.scss";

export const UpdateCategory = ({ onClose, categoryData, reFetch }) => {

    const [formData, setFormData] = useState({});
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();

            for (const key in formData) {
                if (Array.isArray(formData[key])) {
                    formData[key].forEach((file, index) => {
                        form.append(`${key}_${index}`, file);
                    });
                } else {
                    form.append(key, formData[key]);
                }
            }

            await axios.put(
                `${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?id=${categoryData?.id}`,
                form
            );

            reFetch();
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, type, checked, files, value } = e.target;
        let newValue;

        if (type === "checkbox") {
            newValue = checked;
        } else if (type === "file") {
            newValue = files.length > 1 ? Array.from(files) : files[0];
        } else {
            newValue = value;
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    return (
        <div className="updateCategory">
            <div className="updateContainer">
                {/* close button */}
                <header className="top">
                    <h1>Update Category</h1>
                    <button
                        onClick={onClose}
                        className="closeBtn"
                    >
                        <AiOutlineClose size={25} />
                    </button>
                </header>

                <div className="bottom">
                    <div className="left">
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/image/${categoryData?.image}`}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form
                            onSubmit={handleSubmit}
                            className="updateCategoryForm"
                        >
                            {/* category name */}
                            <div className="formInput">
                                <label> category name:</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder={categoryData?.title}
                                    value={formData.title}
                                    onChange={handleChange}

                                />
                            </div>
                            {/* category name */}
                            <div className="formInput">
                                <label> category description:</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    placeholder={categoryData?.description}
                                    value={formData.description}
                                    onChange={handleChange}

                                />
                            </div>

                            {/* category Image */}
                            <div className="formInput">
                                <label htmlFor="newImage" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>Category Image</div>
                                <input
                                    type="file"
                                    id="newImage"
                                    name="newImage"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                    multiple
                                />
                            </div>

                            {/* category Icon */}
                            <div className="formInput">
                                <label htmlFor="newIcon" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>Category Icon</div>
                                <input
                                    type="file"
                                    id="newIcon"
                                    name="newIcon"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                    multiple
                                />
                            </div>
                            {/* category file */}
                            <div className="formInput">
                                <label htmlFor="newFile" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>Category file</div>
                                <input
                                    type="file"
                                    id="newFile"
                                    name="newFile"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                    multiple
                                />
                            </div>

                            {/* send button */}
                            <div className="formInput">
                                <button className="sendBtn" type="submit">
                                    Update
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}


UpdateCategory.propTypes = {
    onClose: PropTypes.func.isRequired,
    categoryData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    reFetch: PropTypes.func.isRequired
};