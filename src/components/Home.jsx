import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Style.css";
import logo from "../assets/logo.png";

import herohome1 from "../assets/herohome.png";
import herohome2 from "../assets/herohome1.png";
import herohome3 from "../assets/herohome2.png";

import cat1 from "../assets/dairy.png";
import cat2 from "../assets/bread.jpg";
import cat3 from "../assets/candy.jpg";
import cat4 from "../assets/coffee.png";
import cat5 from "../assets/dairy.png";
import cat6 from "../assets/groceries.png";
import cat7 from "../assets/fruit.png";
import cat8 from "../assets/chicken.png";

import sidebar1 from "../assets/sidebar1.png";
import sidebar2 from "../assets/sidebar2.png";

import p1 from "../assets/product1.jpeg";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.jpeg";
import p4 from "../assets/product4.jpeg";
import p5 from "../assets/product5.png";
import p6 from "../assets/product6.jpeg";
import p7 from "../assets/product7.jpeg";
import p8 from "../assets/product8.jpeg";
import p9 from "../assets/product9.jpeg";
import p10 from "../assets/product10.jpeg";
import p11 from "../assets/product10.jpeg";

export default function Home() {

    const slides = [
        {
            title: "Fresh Bakery Products",
            price: "$14.25",
            desc: "Premium quality bakery items freshly baked for you.",
            image: herohome1
        },
        {
            title: "Organic Fresh Produce",
            price: "$10.99",
            desc: "Healthy and organic vegetables & fruits.",
            image: herohome2
        },
        {
            title: "Hot Coffee Collection",
            price: "$7.50",
            desc: "Start your morning with premium coffee.",
            image: herohome3
        }
    ];


    const [current, setCurrent] = useState(0);

    const nextSlide1 = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide1 = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide1();
        }, 4000);

        return () => clearInterval(interval);
    }, [current]);

    const categories = [
        { img: cat1, name: "Bakery" },
        { img: cat2, name: "Bread" },
        { img: cat3, name: "Candy" },
        { img: cat4, name: "Coffee" },
        { img: cat5, name: "Dairy & Eggs" },
        { img: cat6, name: "Fresh Produce" },
        { img: cat7, name: "Frozen" },
        { img: cat8, name: "Meat & Fish" },
    ];

    const [index1, setIndex1] = useState(0);
    const total = categories.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex1((prev) => (prev + 1) % total);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const productsData = [
        { id: 1, name: "Natural sliced almonds", price: 1.2, oldPrice: 1.4, img: p1 },
        { id: 2, name: "White large kurdish garlic", price: 32, oldPrice: 3, img: p2 },
        { id: 3, name: "Fresh red bell pepper", price: 3.25, oldPrice: 4, img: p3 },
        { id: 4, name: "Superfine nut flour", price: 2.34, oldPrice: 3.25, img: p4 },
        { id: 5, name: "Bertolli Frozen Meals", price: 7, oldPrice: 8, img: p5 },
        { id: 6, name: "Organic broccoli", price: 3.25, oldPrice: 4, img: p6 },
        { id: 7, name: "Fresh tomato", price: 2.2, oldPrice: 3, img: p7 },
        { id: 8, name: "Green chili", price: 1.5, oldPrice: 2, img: p8 },
        { id: 9, name: "Olive oil", price: 10, oldPrice: 14, img: p9 },
        { id: 10, name: "Pasta", price: 4, oldPrice: 6, img: p10 },
        { id: 11, name: "Milk", price: 5, oldPrice: 7, img: p11 }
    ];

    const [index, setIndex] = useState(0);
    const [compareItems, setCompareItems] = useState([]);
    const [isCompareOpen, setIsCompareOpen] = useState(false);

    const visibleCards = Math.floor(window.innerWidth / 265);


    const nextSlide = () => {
        if (index < productsData.length - visibleCards) {
            setIndex(index + 1);
        }
    };


    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    // Add to Compare
    const addToCompare = (product) => {
        if (!compareItems.find((item) => item.id === product.id)) {
            setCompareItems([...compareItems, product]);
            setIsCompareOpen(true);
        }
    };

    const removeFromCompare = (id) => {
        setCompareItems(compareItems.filter((item) => item.id !== id));
    };

    // Close on ESC + disable scroll
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsCompareOpen(false);
        };

        if (isCompareOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isCompareOpen]);
    return (
        <>
            <div className="gg-topbar">
                <div className="container d-flex justify-content-between">
                    <span>Welcome to our online store!</span>
                    <div className="gg-top-links">
                        <a href="#">FAQ</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">ENG <i className="fas fa-chevron-down ms-1"></i></a>
                        <i className="fab fa-facebook-f ms-3"></i>
                        <i className="fab fa-twitter ms-3"></i>
                        <i className="fab fa-pinterest ms-3"></i>
                    </div>
                </div>
            </div>

            <div className="gg-header">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="gg-logo d-flex align-items-center">
                        <i className="fas fa-shopping-basket gg-logo-icon"></i>
                        <div>
                            <img src={logo} ></img>
                        </div>
                    </div>

                    <div className="gg-search-box">
                        <input type="text" placeholder="Search for product..." />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <div className="gg-icons">
                        <div><i className="far fa-user"></i><span>Account</span></div>
                        <div
                            onClick={() => setIsCompareOpen(true)}
                        >
                            <i className="fas fa-sync"></i>
                            <span className="kitchen-compare-count">
                                {compareItems.length}
                            </span>
                        </div>
                        <div><i className="far fa-heart"></i><span>Wishlist</span></div>
                        <div><i className="fas fa-shopping-bag"></i><span>Cart</span></div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg gg-navbar">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ggNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="ggNav">

                        <div className="dropdown me-4 position-static">
                            <button className="btn gg-category-btn dropdown-toggle" data-bs-toggle="dropdown">
                                CATEGORIES
                            </button>

                            <ul className="dropdown-menu gg-category-menu p-2">

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-bread-slice me-2 text-warning"></i> Bakery</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cakes</a></li>
                                        <li><a className="dropdown-item" href="#">Cookies</a></li>
                                        <li><a className="dropdown-item" href="#">Pastries</a></li>
                                        <li><a className="dropdown-item" href="#">Brownies</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-wheat-awn me-2 text-success"></i> Bread</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Whole Wheat</a></li>
                                        <li><a className="dropdown-item" href="#">Multigrain</a></li>
                                        <li><a className="dropdown-item" href="#">Garlic Bread</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-candy-cane me-2 text-danger"></i> Candy</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Gum</a></li>
                                        <li><a className="dropdown-item" href="#">Hard Candy</a></li>
                                    </ul>
                                </li>


                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-mug-hot me-2 text-brown"></i> Coffee</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Coffee Creamers</a></li>
                                        <li><a className="dropdown-item" href="#">Coffee Pods</a></li>
                                        <li><a className="dropdown-item" href="#">Cold Brew Coffee</a></li>
                                        <li><a className="dropdown-item" href="#">Ground Coffee</a></li>

                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-fish me-2 text-primary"></i> Dairy & Eggs</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cheese</a></li>
                                        <li><a className="dropdown-item" href="#">Chocolates</a></li>
                                        <li><a className="dropdown-item" href="#">Eggs</a></li>
                                        <li><a className="dropdown-item" href="#">Milk</a></li>

                                    </ul>
                                </li>


                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fa-solid fa-apple-whole me-2 text-danger"></i> Fresh Produce</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Fresh Herbs</a></li>
                                        <li><a className="dropdown-item" href="#">Fresh Vegetables</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fa-solid fa-ice-cream me-2 text-primary"></i> Frozen</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Frozen Breakfast</a></li>
                                        <li><a className="dropdown-item" href="#">Frozen Produce</a></li>
                                        <li><a className="dropdown-item" href="#">Frozen Snacks</a></li>

                                    </ul>
                                </li>

                                <li><a className="dropdown-item" href="#"><i className="fas fa-fish me-2 text-primary"></i> Meat & Fish</a></li>

                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-carrot text-success"></i>Orgnic Foods</a></li>

                            </ul>
                        </div>


                        <ul className="navbar-nav me-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    HOME
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Home 1</a></li>
                                    <li><a className="dropdown-item" href="#">Home 2</a></li>
                                    <li><a className="dropdown-item" href="#">Home 3</a></li>
                                    <li><a className="dropdown-item" href="#">Home 4</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown position-static">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    SHOP
                                </a>

                                <div className="dropdown-menu gg-mega-menu p-4">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h6>Catalog</h6>
                                            <a className="dropdown-item" href="#">Style 1</a>
                                            <a className="dropdown-item" href="#">Style 2</a>
                                            <a className="dropdown-item" href="#">Style 3</a>
                                            <a className="dropdown-item" href="#">Infinite Scroll</a>
                                        </div>

                                        <div className="col-md-3">
                                            <h6>Shop Layouts</h6>
                                            <a className="dropdown-item" href="#">Default</a>
                                            <a className="dropdown-item" href="#">Left Sidebar</a>
                                            <a className="dropdown-item" href="#">Right Sidebar</a>
                                            <a className="dropdown-item" href="#">Full Width</a>
                                        </div>

                                        <div className="col-md-3">
                                            <h6>Shop Columns</h6>
                                            <a className="dropdown-item" href="#">Column 3</a>
                                            <a className="dropdown-item" href="#">Column 4</a>
                                            <a className="dropdown-item" href="#">Column 5</a>
                                        </div>

                                        <div className="col-md-3">
                                            <h6>Shop Pages</h6>
                                            <a className="dropdown-item" href="#">Checkout</a>
                                            <a className="dropdown-item" href="#">My Account</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    PRODUCTS
                                </a>

                                <ul className="dropdown-menu gg-pages-dropdown">

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Product Types
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Simple</a></li>
                                            <li><a className="dropdown-item" href="#">Color Variable</a></li>
                                            <li><a className="dropdown-item" href="#">Image Variable</a></li>
                                            <li><a className="dropdown-item" href="#">Grouped</a></li>
                                            <li><a className="dropdown-item" href="#">External</a></li>
                                            <li><a className="dropdown-item" href="#">Out of Stock</a></li>
                                            <li><a className="dropdown-item" href="#">Coutdown</a></li>
                                            <li><a className="dropdown-item" href="#">Popup Video</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Showcase Styles
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Carousel</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Big</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Small</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Mini</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Coverflow</a></li>
                                            <li><a className="dropdown-item" href="#">Light Background</a></li>
                                            <li><a className="dropdown-item" href="#">Dark Background</a></li>
                                            <li><a className="dropdown-item" href="#">Color Background</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Gallery Styles
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Thumbs Left</a></li>
                                            <li><a className="dropdown-item" href="#">Thumbs Right</a></li>
                                            <li><a className="dropdown-item" href="#">Thumbs Bottom</a></li>
                                            <li><a className="dropdown-item" href="#">Thumbs Top</a></li>
                                            <li><a className="dropdown-item" href="#">Grid</a></li>
                                            <li><a className="dropdown-item" href="#">Column 2</a></li>
                                            <li><a className="dropdown-item" href="#">Column 3</a></li>
                                            <li><a className="dropdown-item" href="#">Video Slider</a></li>
                                            <li><a className="dropdown-item" href="#">Video Grid - Auto Start</a></li>
                                            <li><a className="dropdown-item" href="#">Video Popup</a></li>
                                            <li><a className="dropdown-item" href="#">Stretch</a></li>

                                        </ul>
                                    </li>


                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Page Layouts
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                                            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                                            <li><a className="dropdown-item" href="#">Fullwidth</a></li>
                                            <li><a className="dropdown-item" href="#">Tabs</a></li>
                                            <li><a className="dropdown-item" href="#">Accordion</a></li>
                                            <li><a className="dropdown-item" href="#">Accordion 2</a></li>
                                            <li><a className="dropdown-item" href="#">Advanced Review & Q&A</a></li>

                                        </ul>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    PAGES
                                </a>

                                <ul className="dropdown-menu gg-pages-dropdown">

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Home
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Home #1</a></li>
                                            <li><a className="dropdown-item" href="#">Home #2</a></li>
                                            <li><a className="dropdown-item" href="#">Home #3</a></li>
                                            <li><a className="dropdown-item" href="#">Home #4</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Blog
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Layouts</a></li>
                                            <li><a className="dropdown-item" href="#">Grid Type</a></li>
                                            <li><a className="dropdown-item" href="#">Pagination</a></li>
                                        </ul>
                                    </li>

                                    <li><a className="dropdown-item" href="#">FAQ</a></li>
                                    <li><a className="dropdown-item" href="#">Order Tracking</a></li>
                                    <li><a className="dropdown-item" href="#">404</a></li>
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Contact #1</a></li>
                                    <li><a className="dropdown-item" href="#">Contact #2</a></li>

                                </ul>
                            </li>




                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>

                        </ul>

                        <div className="gg-call">
                            <div className="gg-right-info d-flex align-items-center">

                                <div className="gg-location dropdown me-4">
                                    <span className="gg-small-text">Your Location</span>
                                    <a className="dropdown-toggle gg-big-text" href="#" data-bs-toggle="dropdown">
                                        Select a Location
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">New York</a></li>
                                        <li><a className="dropdown-item" href="#">London</a></li>
                                        <li><a className="dropdown-item" href="#">India</a></li>
                                    </ul>
                                </div>

                                <div className="gg-discount me-4">
                                    <i className="fas fa-percentage"></i>
                                    <div>
                                        <span className="gg-small-text">Only This Weekend</span>
                                        <div className="gg-big-text">Super Discount</div>
                                    </div>
                                </div>

                                <div className="gg-call">
                                    <i className="fas fa-phone-alt me-2"></i>
                                    <span className="gg-big-text">280 900 3434</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>


            <div className="container-fluid mt-4">
                <div className="row">

                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="card p-3 sidebar">
                            <h5 className="mb-3">Categories</h5>
                            <ul className="list-unstyled category-list">
                                {/* <li><i className="fas fa-bread-slice me-2 text-warning"></i> Bakery</li>
                                <li><i className="fas fa-wheat-awn me-2 text-success"></i> Bread</li>
                                <li><i className="fas fa-candy-cane me-2 text-danger"></i> Candy</li>
                                <li><i className="fas fa-mug-hot me-2 text-dark"></i> Coffee</li>
                                <li><i className="fas fa-egg me-2 text-primary"></i> Dairy & Eggs</li>
                                <li><i className="fas fa-apple-whole me-2 text-danger"></i> Fresh Produce</li>
                                <li><i className="fas fa-ice-cream me-2 text-info"></i> Frozen</li>
                                <li><i className="fas fa-fish me-2 text-primary"></i> Meat & Fish</li>
                                <li><i className="fas fa-carrot me-2 text-success"></i> Organic Foods</li>
                                <li><i className="fas fa-cookie-bite me-2 text-warning"></i> Snacks</li> */}

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-bread-slice me-2 text-warning"></i> Bakery</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cakes</a></li>
                                        <li><a className="dropdown-item" href="#">Cookies</a></li>
                                        <li><a className="dropdown-item" href="#">Pastries</a></li>
                                        <li><a className="dropdown-item" href="#">Brownies</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-wheat-awn me-2 text-success"></i> Bread</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Whole Wheat</a></li>
                                        <li><a className="dropdown-item" href="#">Multigrain</a></li>
                                        <li><a className="dropdown-item" href="#">Garlic Bread</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-candy-cane me-2 text-danger"></i> Candy</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Gum</a></li>
                                        <li><a className="dropdown-item" href="#">Hard Candy</a></li>
                                    </ul>
                                </li>


                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-mug-hot me-2 text-brown"></i> Coffee</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Coffee Creamers</a></li>
                                        <li><a className="dropdown-item" href="#">Coffee Pods</a></li>
                                        <li><a className="dropdown-item" href="#">Cold Brew Coffee</a></li>
                                        <li><a className="dropdown-item" href="#">Ground Coffee</a></li>

                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-fish me-2 text-primary"></i> Dairy & Eggs</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cheese</a></li>
                                        <li><a className="dropdown-item" href="#">Chocolates</a></li>
                                        <li><a className="dropdown-item" href="#">Eggs</a></li>
                                        <li><a className="dropdown-item" href="#">Milk</a></li>

                                    </ul>
                                </li>


                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fa-solid fa-apple-whole me-2 text-danger"></i> Fresh Produce</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Fresh Herbs</a></li>
                                        <li><a className="dropdown-item" href="#">Fresh Vegetables</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fa-solid fa-ice-cream me-2 text-primary"></i> Frozen</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Frozen Breakfast</a></li>
                                        <li><a className="dropdown-item" href="#">Frozen Produce</a></li>
                                        <li><a className="dropdown-item" href="#">Frozen Snacks</a></li>

                                    </ul>
                                </li>

                                <li><a className="dropdown-item" href="#"><i className="fas fa-fish me-2 text-primary"></i> Meat & Fish</a></li>

                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-carrot text-success"></i>Orgnic Foods</a></li>

                            </ul>
                        </div>
                        <div className="promo-card mt-5 mb-4">
                            <img src={sidebar1} alt="Dairy Products" />
                            <div className="promo-content">
                                <h5>Dairy products</h5>
                                <button className="btn btn-dark btn-sm rounded-pill">Order Now!</button>
                            </div>
                        </div>

                        <div className="promo-card">
                            <img src={sidebar2} alt="Hot Cookies" />
                            <div className="promo-content">
                                <h5>Hot cookies are ready!</h5>
                                <button className="btn btn-dark btn-sm rounded-pill">Order Now!</button>
                            </div>
                        </div>


                    </div>

                    <div className="col-lg-9">
                        <div
                            className="hero-section position-relative"
                            style={{
                                backgroundImage: `url(${slides[current].image})`
                            }}
                        >

                            <div className="hero-content">
                                <h2>{slides[current].title}</h2>
                                <h3 className="text-primary">From {slides[current].price}</h3>
                                <p>{slides[current].desc}</p>
                                <button className="btn btn-primary">Products →</button>
                            </div>

                            <button className="hero-btn prev" onClick={prevSlide1}>
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            <button className="hero-btn next" onClick={nextSlide1}>
                                <i className="fas fa-chevron-right"></i>
                            </button>

                        </div>

                        <div className="mt-5">
                            <h4 className="mb-4">Shop by Categories</h4>

                            <div className="slider-wrapper">
                                <div
                                    className="slider-track"
                                    style={{
                                        transform: `translateX(-${index1 * 170}px)`
                                    }}
                                >
                                    {categories.map((item, i) => (
                                        <div className="category-card" key={i}>
                                            <img src={item.img} alt={item.name} />
                                            <h6>{item.name}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Kitchen Products</h4>

                            <div>
                                <button className="kitchen-nav-btn me-2" onClick={prevSlide}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button className="kitchen-nav-btn" onClick={nextSlide}>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="kitchen-slider-container">
                            <div
                                className="kitchen-slider-track"
                                style={{ transform: `translateX(-${index * 250}%)` }}
                            >
                                {productsData.map((item) => (
                                    <div className="kitchen-product-card" key={item.id}>
                                        <div className="kitchen-product-img-wrapper">
                                            <img src={item.img} alt="" />

                                            <div className="kitchen-hover-icons">
                                                <i className="fas fa-heart"></i>
                                                <i
                                                    className="fas fa-sync"
                                                    onClick={() => addToCompare(item)}
                                                ></i>
                                                <i className="fas fa-eye"></i>
                                            </div>
                                        </div>

                                        <p className="kitchen-product-title">{item.name}</p>

                                        <div className="kitchen-price">
                                            <span className="old-price">${item.oldPrice}</span>
                                            <span className="new-price">${item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className={`kitchen-compare-overlay ${isCompareOpen ? "active" : ""}`}
                            onClick={() => setIsCompareOpen(false)}
                        ></div>

                        <div className={`kitchen-compare-sidebar ${isCompareOpen ? "open" : ""}`}>
                            <div className="d-flex justify-content-between mb-4">
                                <h5>Your Compared Products</h5>
                                <i
                                    className="fas fa-times"
                                    onClick={() => setIsCompareOpen(false)}
                                ></i>
                            </div>

                            {compareItems.length === 0 && (
                                <p className="text-muted">No products added.</p>
                            )}

                            {compareItems.map((item) => (
                                <div className="kitchen-compare-item" key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p>{item.name}</p>
                                        <span>${item.price}</span>
                                    </div>
                                    <i
                                        className="fas fa-trash ms-auto"
                                        onClick={() => removeFromCompare(item.id)}
                                    ></i>
                                </div>
                            ))}
                        </div>
                    </div>




                </div>
            </div >
        </>
    )
}