import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import classes from './ProductsSlider.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSlider = (props) => {
    const { products, title, showSalePrice } = props;

    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.frame_title}>
                    <h2>{title}</h2>
                </div>
                {products && products.products ? (
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {products.products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard
                                    id={product.id}
                                    category={product.category}
                                    images={product.images}
                                    price={product.price}
                                    salePrice={product.salePrice}
                                    showSalePrice={product.showSalePrice}
                                    title={product.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <h1>Products was not found</h1>
                )}
            </div>
        </section>
    );
};

export default ProductsSlider;
