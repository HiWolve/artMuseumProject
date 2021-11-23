import { useParams } from 'react-router-dom'



function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const choice = galleries.find((gallery) => gallery.id === +galleryId)
  console.log(choice)
  return (
    <div>
      <h1>Hello From GalleryView</h1>
      <h2>{choice.name}</h2>
    </div>)
}



export default GalleryView
