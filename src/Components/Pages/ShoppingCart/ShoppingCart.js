import React from 'react';

const ShoppingCart = () => {
    return (
        <div>
          {/*  <!-- PAGE TITLE
    ================================================== --> */}
    <header class="py-8 py-md-10" style={{backgroundImage: "none"}}>
        <div class="container text-center py-xl-2">
            <h1 class="display-4 fw-semi-bold mb-0">Shop Cart</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-scroll justify-content-center">
                    <li class="breadcrumb-item">
                        <a class="text-gray-800" href="#">
                            Home
                        </a>
                    </li>
                    <li class="breadcrumb-item text-gray-800 active" aria-current="page">
                        Shop Cart
                    </li>
                </ol>
            </nav>
        </div>
        {/* <!-- Img --> */}
        <img class="d-none img-fluid" src="...html" alt="..."/>
    </header>


    {/* <!-- SHOP CART
    ================================================== --> */}
    <div class="container pb-6 pb-xl-10">
        <div class="row">
            <div id="primary" class="content-area">
                <main id="main" class="site-main ">
                    <div class="page type-page status-publish hentry">
                        {/* <!-- .entry-header --> */}
                        <div class="entry-content">
                            <div class="woocommerce">
                                <form class="woocommerce-cart-form table-responsive" action="#" method="post">
                                    <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                                        <thead>
                                            <tr>
                                                <th  class="product-name">Product</th>
                                                <th class="product-price">Price</th>
                                                <th class="product-quantity">Quantity</th>
                                                <th class="product-subtotal">Subtotal</th>
                                                <th class="product-remove">&nbsp;</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="woocommerce-cart-form__cart-item cart_item">
                                                <td  class="product-name" data-title="Product">
                                                    <div class="d-flex align-items-center">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/products/product-25.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                        </a>
                                                        <div class="ms-6">
                                                            <a href="shop-single.html">Album</a>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td class="product-price" data-title="Price">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>298</span>
                                                </td>

                                                <td class="product-quantity" data-title="Quantity">
                                                    {/* <!-- Quantity --> */}
                                                    <div class="border rounded d-flex align-items-center">
                                                        <input class="form-control form-control-sm border-0 quantity mw-70p px-2" min="0" name="quantity" value="1" type="number"/>
                                                        <div class="d-flex flex-column me-3">
                                                            <button class="border-0 shadow-none quantity-plus font-size-10 p-0 bg-transparent outline-0 text-dark">
                                                                <i class="fas fa-chevron-up"></i>
                                                            </button>
                                                            <button class="border-0 shadow-none quantity-minus font-size-10 p-0 bg-transparent outline-0 text-dark">
                                                                <i class="fas fa-chevron-down"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Quantity --> */}
                                                </td>

                                                <td class="product-subtotal" data-title="Total">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>1298</span>
                                                </td>
                                                <td class="product-remove">
                                                    <a href="#" class="remove" aria-label="Remove this item">
                                                        <i class="far fa-trash-alt text-secondary font-size-sm"></i>
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr class="woocommerce-cart-form__cart-item cart_item">
                                                <td  class="product-name" data-title="Product">
                                                    <div class="d-flex align-items-center">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/products/product-27.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                        </a>
                                                        <div class="ms-6">
                                                            <a href="shop-single.html">Hoodie</a>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td class="product-price" data-title="Price">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>298</span>
                                                </td>

                                                <td class="product-quantity" data-title="Quantity">
                                                    {/* <!-- Quantity --> */}
                                                    <div class="border rounded d-flex align-items-center">
                                                        <input class="form-control form-control-sm border-0 quantity mw-70p px-2" min="0" name="quantity" value="1" type="number"/>
                                                        <div class="d-flex flex-column me-3">
                                                            <button class="border-0 shadow-none quantity-plus font-size-10 p-0 bg-transparent outline-0 text-dark">
                                                                <i class="fas fa-chevron-up"></i>
                                                            </button>
                                                            <button class="border-0 shadow-none quantity-minus font-size-10 p-0 bg-transparent outline-0 text-dark">
                                                                <i class="fas fa-chevron-down"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Quantity --> */}
                                                </td>

                                                <td class="product-subtotal" data-title="Total">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>1298</span>
                                                </td>
                                                <td class="product-remove">
                                                    <a href="#" class="remove" aria-label="Remove this item">
                                                        <i class="far fa-trash-alt text-secondary font-size-sm"></i>
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr class="woocommerce-cart-form__cart-item cart_item">
                                                <td  class="product-name" data-title="Product">
                                                    <div class="d-flex align-items-center">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/products/product-28.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                        </a>
                                                        <div class="ms-6">
                                                            <a href="shop-single.html">Beanie</a>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td class="product-price" data-title="Price">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>298</span>
                                                </td>

                                                <td class="product-quantity" data-title="Quantity">
                                                    {/* <!-- Quantity --> */}
                                                    <div class="border rounded d-flex align-items-center">
                                                        <input class="form-control form-control-sm border-0 quantity mw-70p px-2" min="0" name="quantity" value="1" type="number"/>
                                                        <div class="d-flex flex-column me-3">
                                                            <button class="border-0 shadow-none quantity-plus font-size-10 p-0 bg-transparent outline-0 text-dark">
                                                                <i class="fas fa-chevron-up"></i>
                                                            </button>
                                                            <button class="border-0 shadow-none quantity-minus font-size-10 p-0 bg-transparent outline-0 text-dark">
                                                                <i class="fas fa-chevron-down"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Quantity --> */}
                                                </td>

                                                <td class="product-subtotal" data-title="Total">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>1298</span>
                                                </td>
                                                <td class="product-remove">
                                                    <a href="#" class="remove" aria-label="Remove this item">
                                                        <i class="far fa-trash-alt text-secondary font-size-sm"></i>
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="5" class="actions">
                                                    <div class="coupon">
                                                        <label for="coupon_code">Coupon:</label>
                                                        <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="Coupon code" autocomplete="off"/> <input type="submit" class="button" name="apply_coupon" value="Apply coupon"/>
                                                    </div>

                                                    <input type="submit" class="button" name="update_cart" value="Update cart"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        {/* <!-- .entry-content --> */}
                    </div>
                </main>
            </div>
            <div id="secondary" class="sidebar" role="complementary">
                <div class="cart-collaterals">
                    <div class="cart_totals">
                        <h2>Cart totals</h2>

                        <table class="shop_table shop_table_responsive">
                            <tbody>
                                <tr class="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td data-title="Subtotal"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>109.95</span></td>
                                </tr>

                                <tr class="order-total">
                                    <th>Total</th>
                                    <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">£</span>109.95</span></strong> </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="wc-proceed-to-checkout">
                            <a href="shop-checkout.html" class="checkout-button button alt wc-forward">
                                Proceed to checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section className="py-6 py-md-11" data-jarallax data-speed=".8" style={{backgroundImage: 'url(assets/img/illustrations/illustration-4.jpg)'}}>
                <div className="container text-center py-xl-4" data-aos="fade-up">
                    <div className="row">
                        <div className="col-xl-7 mx-auto">
                            <h1 className="text-capitalize">Subscribe our newsletter</h1>
                            <p className="text-capitalize font-size-lg mb-md-6 mb-4">Your download should start automatically, if not Click here. Should I give up, huh?.</p>
                            <div className="mx-md-8">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-helio btn-sm-wide text-white" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ShoppingCart;