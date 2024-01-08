import React from 'react'


export default function Product({product}) {
    return (
        <>
            <div className="col-md-3 shop-item">
                <div className="inner-box">
                    <div className="image">
                        <a href="shop-detail.html">
                            <img src={product.image} alt="" /></a>
                        <span className="tag flaticon-heart"></span>
                        <div className="cart-box text-center">
                            <a className="cart" href="#">Add to Cart</a>
                        </div>
                    </div>
                    <div className="lower-content">
                        <div className="rating">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="light fa fa-star"></span>
                        </div>
                        <h6><a href="shop-detail.html">{product.title}</a></h6>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="price">{product.price} FCFA</div>

                            <div className="quantity-box">
                                <div className="item-quantity">
                                    <input className="qty-spinner" type="text" name="quantity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
