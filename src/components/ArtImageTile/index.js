import { useParams } from 'react-router-dom'

const ImgRender = ({ galleries }) => {
    const { galleryId } = useParams()
    const artPiece = galleries.find(gallery => gallery.id === +galleryId)
    console.log(artPiece.objects)
    // console.log(artPiece.objects[0])
    const imgUrl = artPiece.objects[0].images[0].baseimageurl
    return (
        <img alt='' src={`${imgUrl}`}></img>
    )
}

export default ImgRender
