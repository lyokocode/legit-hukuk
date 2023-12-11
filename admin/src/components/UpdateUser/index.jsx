import { useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md"
import "./updateUser.scss"
import { useNavigate } from "react-router-dom";

export const UpdateUser = ({ onClose, userData, reFetch }) => {
    const { auth } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({});

    const navigate = useNavigate()

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
                `${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?id=${userData?.id}`,
                form
            );

            reFetch();
            onClose();
            navigate("..")
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

    console.log(formData)

    return (
        <div className="updateUser">

            <div className="updateContainer">

                {/* page header */}
                <header className="top">
                    <h1>Update User</h1>

                    {/* close button */}
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
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/user/avatar/${userData?.avatar}`}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>

                            {/* Avatar */}
                            <div className="formInput">
                                <label htmlFor="newImage" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>User Image</div>
                                <input
                                    type="file"
                                    id="newImage"
                                    name="newImage"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                    multiple
                                />
                            </div>
                            {/* userFile */}
                            <div className="formInput">
                                <label htmlFor="newFile" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>User file</div>
                                <input
                                    type="file"
                                    id="newFile"
                                    name="newFile"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                    multiple
                                />
                            </div>
                            {/* fullName */}
                            <div className="formInput">
                                <label> fullName:</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder={userData?.fullName}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* username */}
                            <div className="formInput">
                                <label> username:</label>
                                <input
                                    name="userName"
                                    type="text"
                                    placeholder={userData?.userName}
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                            </div>


                            {/* email */}
                            <div className="formInput">
                                <label> email:</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder={userData?.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* password */}
                            <div className="formInput">
                                <label> password:</label>
                                <input
                                    name="password"
                                    type="text"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* isAdmin */}
                            {auth.isAdmin && (
                                <>
                                    <div className="formInput">
                                        <label>isAdmin:</label>
                                        <select
                                            value={formData.isAdmin}
                                            name="isAdmin"
                                            onChange={handleChange}
                                        >
                                            <option value=""></option>
                                            <option value="false">false</option>
                                            <option value="true">true</option>
                                        </select>
                                    </div>
                                </>
                            )}


                            {/* user detail */}
                            <div className="formInput">
                                <label> User Detail:</label>
                                <textarea
                                    type="text"
                                    name="detail"
                                    placeholder={userData?.detail}
                                    value={formData.detail}
                                    onChange={handleChange}

                                />
                            </div>

                            {/* linkedin */}
                            <div className="formInput">
                                <label> linkedin:</label>
                                <input
                                    name="linkedin"
                                    type="text"
                                    placeholder={userData?.linkedin}
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* twitter */}
                            <div className="formInput">
                                <label> twitter:</label>
                                <input
                                    name="twitter"
                                    type="text"
                                    placeholder={userData?.twitter}
                                    value={formData.twitter}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* activeAreas */}
                            <div className="formInput">
                                <label> active areas:</label>
                                <input
                                    name="activeAreas"
                                    type="text"
                                    placeholder={userData?.activeAreas}
                                    value={formData.activeAreas}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* languages */}
                            <div className="formInput">
                                <label> languages:</label>
                                <input
                                    name="languages"
                                    type="text"
                                    placeholder={userData?.languages}
                                    value={formData.languages}
                                    onChange={handleChange}
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

UpdateUser.propTypes = {
    onClose: PropTypes.func.isRequired,
    userData: PropTypes.shape({
        id: PropTypes.number,
        fullName: PropTypes.string,
        userName: PropTypes.string,
        avatar: PropTypes.string,
        email: PropTypes.string,
        linkedin: PropTypes.string,
        twitter: PropTypes.string,
        activeAreas: PropTypes.string,
        languages: PropTypes.string,
        detail: PropTypes.string,
        isAdmin: PropTypes.bool,
    }),
    reFetch: PropTypes.func.isRequired,
};