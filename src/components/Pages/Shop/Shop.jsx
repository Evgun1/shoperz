import ShopFilter from '../../Elements/Shop/ShopFilter/ShopFilter';
import ShopProduct from '../../Elements/Shop/ShopProduct/ShopProduct';
import classes from './Shop.module.css';

const Shop = () => {
    return (
        <section className={classes.wrapper}>
            <div className="container">
                <div className={classes.grid}>
                    <ShopFilter />
                    <ShopProduct />
                </div>
            </div>
        </section>
    );
};

export default Shop;
