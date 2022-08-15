
import React from 'react';
import "../../Styles/ListItem.css"

const ListItem = ({
  item: { integrations__image_src, title, detail},
}) => (
  <div className='listItem-wrap'>
        <div className='listItem_img_div'>
            <img src={integrations__image_src} alt=''/>
        </div>
            <header>
                <h4>{title}</h4>
                {/* <span>🌟{rating}</span> */}
            </header>
            <footer>
             {/* <p>
             <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
            </p> */}
            <p>
            <b>{detail}</b>
            </p>
        </footer>
    </div>
);

export default ListItem;