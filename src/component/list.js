import "../../src/index.css";
import items from '../image/item.jpeg';

const List = ({  }) => {

  return (
   <>
    <div className="list-grid">
       {[1,2,3,4,5,6,7,8,9,10].map((item) => (
        <div className="list-grid-item">
            <div>
                <img src={items} alt="item" className="list-item-image" />
            </div>
        </div>
         ))}


    </div>
   </>
  );
};

export default List;
