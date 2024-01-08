import React from 'react'
import Product from '../components/Product';

export default function Home() {

    const [categories, setCategories] = React.useState([]);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories").then((res) => res.json()).then((data => {
            setCategories(data);
        }))

        fetch("https://fakestoreapi.com/products?limit=4").then((res) => res.json()).then((data => {
            setProducts(data);
        }))
    }, [])

    return (
        <>
            <section className="featured-section">
                <div className="auto-container">
                    <h3 className='my-3'>Nos catégories</h3>
                    <div className="inner-container">
                        <div className="row clearfix">

                            {
                                categories.map((category, key) => {
                                    return <div key={key} className="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="content">
                                                <div className="icon flaticon-fast"></div>
                                                <strong>{category[0].toUpperCase() + category.slice(1)}</strong>
                                                <div className="text">Free shipping over $100</div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>

            <section className="products-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h4><span>Derniers</span> produits pour vous !</h4>
                    </div>

                    <div className="row">
                    {
                        products.map((product, key) => {
                            return <Product key={key} product={product}/>
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}
