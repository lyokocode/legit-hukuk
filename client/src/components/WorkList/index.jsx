import { WorkCard } from "@/components/WorkCard"
import "./workList.scss"
import useFetch from "@/hooks/useFetch";

export const WorkList = () => {

    const { data: categories, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );
    if (loading) {
        return "loading"
    }
    if (error) {
        return "error"
    }
    return (
        <div className="workList">
            {
                categories && categories.map(category => (
                    <WorkCard
                        key={category.id}
                        category={category}
                    />
                ))
            }
        </div>
    )
}
