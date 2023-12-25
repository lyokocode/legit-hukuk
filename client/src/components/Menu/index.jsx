import "./menu.scss"
import { CategoryList, LatestBlogs } from '@/components';

export const Menu = () => {

    return (
        <div className='menuContainer'>
            <div className='title'>
                <div className="hr" />
                <h1>Kategoriler</h1>
                <div className="hr" />
            </div>

            <CategoryList />
            <div className='title'>
                <div className="hr" />
                <h1>Son Bloglar</h1>
                <div className="hr" />
            </div>

            <LatestBlogs />
        </div>
    )
}
