import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "./singleUser.scss"
import { useState } from "react"
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai"
import { Loading, UpdateUser } from "../../components"
import useFetch from "../../hooks/useFetch"

export const SingleUser = () => {
    const { slug } = useParams()
    const { auth } = useSelector(state => state.auth)
    console.log(slug)
    const { data: user, loading, error, reFetch } = useFetch(`${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?slug=${slug}`)
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [selected, setSelected] = useState("Blogs")
    console.log(user)
    return (
        <>
            {
                loading ? "loading" : (
                    <>
                        <div className="singleUser">
                            <header>
                                <div className="container">
                                    <div className="profile">
                                        <div className="profile-image">
                                            {user?.avatar ? (
                                                <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/user/avatar/${user?.avatar}`} alt="" />

                                            ) : (
                                                <AiOutlineUser />
                                            )}

                                        </div>

                                        <div className="profile-user-settings">
                                            {modalVisible && (
                                                <UpdateUser
                                                    userData={user}
                                                    onClose={closeModal}
                                                    reFetch={reFetch}
                                                />
                                            )}
                                            <h1 className="profile-user-name">@{user.userName}</h1>

                                            {
                                                auth.isAdmin | auth?.slug == slug && (
                                                    <button
                                                        className="btn profile-edit-btn"
                                                        onClick={openModal}
                                                    >
                                                        <span>
                                                            Edit Profile
                                                            <AiOutlineSetting />
                                                        </span>
                                                    </button>
                                                )
                                            }

                                            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                                        </div>

                                        <div className="profile-stats">

                                            <ul>
                                                <li onClick={() => setSelected("Blogs")}><span className="profile-stat-count" >{user?.Blogs?.length}</span> Blog</li>
                                                <li onClick={() => setSelected("Categories")}><span className="profile-stat-count" >{user?.Categories?.length}</span> Categories</li>
                                            </ul>

                                        </div>

                                        <div className="profile-bio">

                                            <p><span className="profile-real-name">{auth.fullName}</span> 👨‍⚖️⚖️ </p>

                                        </div>

                                    </div>

                                </div>
                            </header>

                            <main>
                                <div className="container">

                                    <div className="gallery">
                                        {
                                            selected === "Blogs" ? user?.Blogs && user?.Blogs.map((blog, i) => (
                                                <div key={i} className="gallery-item" tabIndex="0">


                                                    {blog.image && (

                                                        <img
                                                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/blog/image/${blog.image}`}
                                                            className="gallery-image" alt="" />

                                                    )}
                                                    <div className="gallery-item-info">
                                                        <ul>
                                                            <li className="gallery-item-likes"><span className="visually-hidden">name:</span><i className="fas fa-heart" aria-hidden="true"></i> {blog?.title}</li>
                                                            {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                                                        </ul>
                                                    </div>

                                                </div>
                                            )) : (
                                                user?.Categories && user?.Categories.map((category, i) => (
                                                    <div key={i} className="gallery-item" tabIndex="0">


                                                        <img
                                                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/legitstore/category/image/${category.image}`}
                                                            className="gallery-image" alt="" />

                                                        <div className="gallery-item-info">
                                                            <ul>
                                                                <li className="gallery-item-likes"><span className="visually-hidden">name:</span><i className="fas fa-heart" aria-hidden="true"></i> {category?.name}</li>
                                                                {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                                                            </ul>
                                                        </div>

                                                    </div>
                                                ))
                                            )
                                        }
                                    </div>
                                    {/* <!-- End of gallery --> */}

                                    {user?.Blogs > 20 && (
                                        <div className="loader"></div>
                                    )}

                                </div>
                            </main>
                        </div>
                    </>
                )
            }
        </>
    )
}
