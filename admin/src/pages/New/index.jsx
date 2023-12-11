import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import PropTypes from 'prop-types';
import { MdDriveFolderUpload } from "react-icons/md";
import "./new.scss";
import useFetch from "~/hooks/useFetch";

export const New = ({ title, inputs, api }) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const { auth } = useSelector(state => state.auth);
    const UserId = auth?.id;

    const { data: categories } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const form = new FormData();
            form.append('UserId', UserId);

            for (const key in formData) {
                if (Array.isArray(formData[key])) {
                    formData[key].forEach((file, index) => {
                        form.append(`${key}_${index}`, file);
                    });
                } else {
                    form.append(key, formData[key]);
                }
            }

            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/${api}`, form);
            navigate("..");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, type, checked, files, value } = e.target;
        let newValue;

        if (type === 'checkbox') {
            newValue = checked;
        } else if (type === 'file') {
            newValue = files.length > 1 ? Array.from(files) : files[0];
        } else {
            newValue = value;
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    console.log(formData)
    return (
        <div className="newPage">
            <header className="top">
                <h1>Create New {title}</h1>
            </header>
            <div className="bottom">
                <div className="left">
                    <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        {inputs.map(input => (
                            <div key={input.id} className="formInput">
                                {input.type === "textarea" ? (
                                    <>
                                        <label>
                                            {input.label}
                                        </label>
                                        <textarea
                                            placeholder={input.placeholder}
                                            name={input.model}
                                            onChange={handleChange}
                                        />
                                    </>
                                ) : input.type === "file" ? (
                                    <div className="formInput">
                                        <label htmlFor={input.model} style={{ cursor: "pointer" }}>
                                            <MdDriveFolderUpload size={35} />
                                        </label>
                                        <div className="labelText">
                                            {input.label}
                                        </div>
                                        <input
                                            type={input.type}
                                            id={input.model}
                                            name={input.model}
                                            onChange={handleChange}
                                            style={{ display: "none" }}
                                            multiple={input.model === 'about'} // Birden fazla dosya seçimi için
                                        />
                                    </div>
                                ) : input.type === "select" ? (
                                    <>
                                        <label htmlFor={input.model}>
                                            {input.label}
                                        </label>
                                        <select
                                            name={input.model}
                                            onChange={handleChange}
                                            defaultValue="false"
                                        >
                                            {
                                                title == "blog" ? (
                                                    <>
                                                        <option value=""></option>
                                                        {categories.map(cat => (
                                                            <>
                                                                <option key={cat.id} value={cat.id}>
                                                                    {cat.title}
                                                                </option>
                                                            </>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <>
                                                        {input.options.map((option, index) => (
                                                            <>
                                                                <option
                                                                    key={index}
                                                                    value={option}
                                                                >
                                                                    {option}
                                                                </option> || DSA
                                                            </>
                                                        ))}
                                                    </>
                                                )
                                            }
                                        </select>
                                    </>
                                ) : (
                                    <>
                                        <label>
                                            {input.label}
                                        </label>
                                        <input
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            name={input.model}
                                            onChange={handleChange}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                        <div className="formInput">
                            <button type="submit" className="sendBtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

New.propTypes = {
    title: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string,
            model: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
    api: PropTypes.string.isRequired,
};
