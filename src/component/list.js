import "../../src/index.css";
import items from '../image/item.jpeg';

const List = ({  }) => {
const  images = [
    {
      id: 1,
      image: items,
    },
    {
      id: 2,
      image: items,
    },
    {
      id: 3,
      image: items,
    },
    {
      id: 4,
      image: items,
    },
    {
      id: 5,
      image: items,
    },
    {
      id: 6,
      image: items,
    },
    {
      id: 7,
      image: items,
    },
    {
      id: 8,
      image: items,
    },
    {
      id: 9,
      image: items,
    },
]
  return (
   <>
    <div className="list-grid">
       {images.map((item) => (
        <div className="list-grid-item">
            <div>
                <img src={item.image} alt="item" className="list-item-image" />
            </div>
        </div>
         ))}


    </div>
   </>
  );
};

export default List;
