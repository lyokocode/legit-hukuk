import { Link } from "react-router-dom"
import useFetch from "@/hooks/useFetch";
export const CategoryList = () => {

    const { data: categories, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );
    if (loading) {
        return "loading"
    }
    if (error) {
        return "error"
    }
    console.log(categories)
    return (
        <ul className='categoryList'>
            {
                categories && categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/makaleler?categoryId=${category.id}`}>
                            {category.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
