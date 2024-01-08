import React from 'react'

export default function Header() {
    return (
        <>
            <header className="main-header">
                <div className="header-lower">

                    <div className="auto-container">
                        <div className="inner-container d-flex justify-content-between align-items-center">

                            <div className="logo-box d-flex align-items-center">

                                <div className="nav-toggle-btn a-nav-toggle navSidebar-button">
                                    <span className="hamburger">
                                        <span className="top-bun"></span>
                                        <span className="meat"></span>
                                        <span className="bottom-bun"></span>
                                    </span>
                                </div>

                                <div className="logo"><a href="index.html"><img src="images/logo.png" alt="" title="" /></a></div>
                            </div>
                            <div className="nav-outer clearfix">

                                <nav className="main-menu show navbar-expand-md">
                                    <div className="navbar-header">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li ><a href="#">Accueil</a></li>
                                            <li><a href="about.html">Categories</a></li>
                                            <li><a href="about.html">Produits</a></li>
                                        </ul>
                                    </div>

                                </nav>

                            </div>

                            <div className="outer-box d-flex align-items-center">
                                <div className="cart-box">
                                    <div className="box-inner">
                                        <a href="shop-detail.html" className="icon-box">
                                            <span className="icon flaticon-bag"></span>
                                            <i className="total-cart">0</i>
                                        </a>
                                        Phone<br />
                                        <a className="phone" href="tel:88-1900-6789-56">88 1900 6789 56</a>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>

            </header>
        </>
    )
}
