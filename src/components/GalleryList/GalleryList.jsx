import GalleryItem from './GalleryItem.jsx'

function GalleryList(props) {
    
    return (
        <ul>
            <div className="pictureList">
                {props.gallery.map(( item, index ) =>
                <GalleryItem 
                item={item}
                key={index}
                getPictures={props.getPictures}/>
                )}
                </div>
                </ul>
    )
}
//declared a function that returns the gallery item list

export default GalleryList;