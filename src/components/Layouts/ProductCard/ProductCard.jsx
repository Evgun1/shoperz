import { Link } from 'react-router-dom';
import classes from './ProductCard.module.css';

import SpeedDial from '../SpeedDial/SpeedDial';

const ProductCard = ({
    category,
    title,
    images,
    showSalePrice,
    salePrice,
    price,
    id,
    // previewType = 'main',
}) => {
    return (
        <div className={classes.elem}>
            <span className={classes.category}>{category}</span>
            <Link to={`/product/${id}`} className={classes.link}>
                <h3 className={classes.title}>{title}</h3>
                <img className={classes.img} src={images[0]} alt="" />
            </Link>
            <div className={classes.priceWraper}>
                <div>
                    {showSalePrice ? (
                        <>
                            <p className={classes.salePrice}>${salePrice}</p>
                            <p className={classes.priceStrikethrough}>
                                ${price}
                            </p>
                        </>
                    ) : (
                        <p className={classes.price}>${price}</p>
                    )}
                </div>

                <SpeedDial id={id} />
            </div>
        </div>
    );
};

export default ProductCard;
