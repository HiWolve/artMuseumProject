import { NavLink } from "react-router-dom"

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries)

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to='/'>Home</NavLink>
            {galleries.map(gallery => {
                return (
                    <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>
                )
            })}
        </nav>
    )
}

export default GalleryNavigation
