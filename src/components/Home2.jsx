import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

import herohome1 from "../assets/herohome.png";
import herohome2 from "../assets/herohome1.png";
import herohome3 from "../assets/herohome2.png";
import heroImage from "../assets/verticalbanner.png";

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
import p12 from "../assets/product11.jpeg";

import sidebar1 from "../assets/sidebar1.png";
import sidebar2 from "../assets/sidebar2.png";

import cat1 from "../assets/dairy.png";
import cat2 from "../assets/bread.jpg";
import cat3 from "../assets/candy.jpg";
import cat4 from "../assets/coffee.png";
import cat5 from "../assets/dairy.png";
import cat6 from "../assets/groceries.png";
import cat7 from "../assets/fruit.png";
import cat8 from "../assets/chicken.png";

import bg1 from "../assets/banner1.png";
import bg2 from "../assets/banner2.png";
import bg3 from "../assets/banner3.png";

import verticalbanner1 from "../assets/verticalbanner2.png";

import brandLogo from "../assets/brand-logo.webp";

import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";

import appstoreImg from "../assets/app-store.png";
import playstoreImg from "../assets/google-play.png";
import paymentImg from "../assets/footer1_img.png";

import "../Home2.css";

export default function Home2() {
    const productsData = [
        {
            id: 1,
            name: "Natural sliced almonds",
            price: 1.2,
            oldPrice: 1.4,
            img: p1,
            rating: 4,
            badge: "SALE",
            discount: "19%"
        },
        {
            id: 2,
            name: "Organic broccoli",
            price: 3.25,
            oldPrice: 4,
            img: p2,
            rating: 5,
            badge: "ORGANIC"
        },
        {
            id: 3,
            name: "Fresh tomato",
            price: 2.2,
            oldPrice: 3,
            img: p3,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 4,
            name: "Organic farming asparagus",
            price: 2.2,
            oldPrice: 3,
            img: p4,
            rating: 3,
            badge: "SALE"
        },
        {
            id: 5,
            name: "Natural sliced featured almonds",
            price: 2.2,
            oldPrice: 3,
            img: p5,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 6,
            name: "White Large  kurdish garlic",
            price: 2.2,
            oldPrice: 3,
            img: p6,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 7,
            name: "Fresh red bell pepper,1 Each",
            price: 2.2,
            oldPrice: 3,
            img: p7,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 8,
            name: "SuperFine balanced nut flour",
            price: 2.2,
            oldPrice: 3,
            img: p8,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 9,
            name: "Bertolli Frozen Skillet Meals",
            price: 2.2,
            oldPrice: 3,
            img: p9,
            rating: 3,
            badge: "SALE"
        },
        {
            id: 10,
            name: "Organic yellow banana chips",
            price: 2.2,
            oldPrice: 3,
            img: p10,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 11,
            name: "Fisher Chef's Naturals Pecans",
            price: 2.2,
            oldPrice: 3,
            img: p12,
            rating: 3,
            badge: "NEW"
        },
        {
            id: 12,
            name: "Fresh tomato",
            price: 2.2,
            oldPrice: 3,
            img: p11,
            rating: 3,
            badge: "SALE"
        }
    ];
    const featuredProducts = [
        { id: 1, name: "Organic green fresh broccoli", price: "$3.25", old: "$4.00", img: p1 },
        { id: 2, name: "Ultimate organic nut flour", price: "$2.25", old: "$3.45", img: p2 },
        { id: 3, name: "Fresh green broccoli", price: "$3.25", old: "$4.00", img: p8 },
        { id: 4, name: "Organic apple", price: "$2.10", old: "$3.00", img: p5 },
        { id: 5, name: "Organic carrot", price: "$1.80", old: "$2.50", img: p10 },
        { id: 6, name: "Fresh spinach", price: "$2.50", old: "$3.10", img: p4 },
        { id: 7, name: "Organic tomato", price: "$2.75", old: "$3.40", img: p9 },
    ];

    const [index, setIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        const updateCards = () => {
            if (window.innerWidth >= 1400) setVisibleCards(5);
            else if (window.innerWidth >= 1200) setVisibleCards(4);
            else if (window.innerWidth >= 992) setVisibleCards(3);
            else if (window.innerWidth >= 768) setVisibleCards(2);
            else setVisibleCards(1);
        };

        updateCards();
        window.addEventListener("resize", updateCards);

        return () => window.removeEventListener("resize", updateCards);
    }, []);


    const nextSlide = () => {
        if (index < productsData.length - visibleCards) {
            setIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    };
    const [compareItems, setCompareItems] = useState([]);
    const [isCompareOpen, setIsCompareOpen] = useState(false);

    const addToCompare = (product) => {
        if (!compareItems.find((item) => item.id === product.id)) {
            setCompareItems([...compareItems, product]);
            setIsCompareOpen(true);
        }
    };

    const removeFromCompare = (id) => {
        setCompareItems(compareItems.filter((item) => item.id !== id));
    };

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

    useEffect(() => {
        const handleResizeClose = () => {
            setIsCompareOpen(false);
        };

        window.addEventListener("resize", handleResizeClose);
        return () => window.removeEventListener("resize", handleResizeClose);
    }, []);

    const [ggwWishlistItems, setGgwWishlistItems] = useState([]);
    const [ggwIsWishlistOpen, setGgwIsWishlistOpen] = useState(false);


    const ggwAddToWishlist = (product) => {
        const exists = ggwWishlistItems.find((item) => item.id === product.id);
        if (!exists) {
            setGgwWishlistItems([...ggwWishlistItems, product]);
        }
        setGgwIsWishlistOpen(true);
    };

    const ggwRemoveFromWishlist = (id) => {
        setGgwWishlistItems(
            ggwWishlistItems.filter((item) => item.id !== id)
        );
    };
    const [kgCartItems, setKgCartItems] = useState(() => {
        const savedCart = localStorage.getItem("kgCart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [kgIsCartOpen, setKgIsCartOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("kgCart", JSON.stringify(kgCartItems));
    }, [kgCartItems]);

    const kgAddToCart = (product) => {
        setKgIsCartOpen(true);

        setKgCartItems((prev) => {
            const exist = prev.find((item) => item.id === product.id);

            if (exist) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, qty: 1 }];
            }
        });
    };

    const kgIncreaseQty = (id) => {
        setKgCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const kgDecreaseQty = (id) => {
        setKgCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const kgRemoveItem = (id) => {
        setKgCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const kgSubtotal = kgCartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );
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

    const [ggwIsAccountOpen, setGgwIsAccountOpen] = useState(false);

    const [kgQuickViewProduct, setKgQuickViewProduct] = useState(null);
    const [kgQuickViewIndex, setKgQuickViewIndex] = useState(0);

    const kgOpenQuickView = (product) => {
        setKgQuickViewProduct(product);
        setKgQuickViewIndex(0);
    };

    const kgCloseQuickView = () => {
        setKgQuickViewProduct(null);
    };

    const onSaleProducts = [...featuredProducts];
    const bestsellerProducts = [...featuredProducts];

    const [vfCurrentIndex, setVfCurrentIndex] = useState(0);

    const vfNextSlide = () => {
        if (vfCurrentIndex < productsData.length - vfVisibleCount) {
            setVfCurrentIndex(prev => prev + 1);
        }
    };

    const vfPrevSlide = () => {
        if (vfCurrentIndex > 0) {
            setVfCurrentIndex(prev => prev - 1);
        }
    };
    const vfVisibleCount = 3;
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

    const featuredRef = useRef(null);
    const saleRef = useRef(null);
    const bestRef = useRef(null);

    const scrollBlock = (ref, direction) => {
        const scrollAmount = 125;

        if (direction === "next") {
            ref.current.scrollTop += scrollAmount;
        } else {
            ref.current.scrollTop -= scrollAmount;
        }
    };

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };

    const ProductBlock = ({ title, products, blockRef, uniqueName }) => (
        <div className="hps-block-wrapper">
            <div className="hps-block-header">
                <h5>{title}</h5>
                <div>
                    <button
                        className={`hps-btn-prev-${uniqueName}`}
                        onClick={() => scrollBlock(blockRef, "prev")}
                    >
                        &#10094;
                    </button>
                    <button
                        className={`hps-btn-next-${uniqueName}`}
                        onClick={() => scrollBlock(blockRef, "next")}
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            <div className="hps-product-scroll" ref={blockRef}>
                {products.map((item) => (
                    <div className="hps-product-card" key={item.id}>
                        <div className="hps-product-image">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="hps-product-info">
                            <p className="hps-stock-text">IN STOCK</p>
                            <h6>{item.name}</h6>
                            <div className="hps-price">
                                <span className="hps-old-price">{item.old}</span>
                                <span className="hps-new-price">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const instaimgs = [
        { img: i1 },
        { img: i2 },
        { img: i3 },
        { img: i4 },
        { img: i5 },
        { img: i6 }
    ]




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
                        <div
                            className="ggw-account-btn"
                            onClick={() => setGgwIsAccountOpen(true)}
                        >
                            <i className="far fa-user"></i>
                            <span>Account</span>
                        </div>
                        <div
                            onClick={() => setIsCompareOpen(true)}
                        >
                            <i className="fas fa-sync"></i>
                            <span className="kitchen-compare-count">
                                {compareItems.length}
                            </span>
                        </div>

                        <div onClick={() => setGgwIsWishlistOpen(true)} className="ggw-header-wishlist">
                            <i className="far fa-heart"></i>
                            <span className="ggw-wishlist-count">
                                {ggwWishlistItems.length}
                            </span>
                            <span>Wishlist</span>
                        </div>
                        <div
                            className="kg-header-cart-icon"
                            onClick={() => setKgIsCartOpen(true)}
                        >
                            <i className="fas fa-shopping-bag"></i>
                            <span className="kg-cart-count">
                                {kgCartItems.length}
                            </span>
                            <span>Cart</span>
                        </div>
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
                                    <li>
                                        <Link to="/" className="dropdown-item">
                                            Home 1
                                        </Link>
                                    </li>                                    <li>
                                        <Link to="/home2" className="dropdown-item">
                                            Home 2
                                        </Link>
                                    </li>
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
                    <div className="col-lg-7">
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
                    </div>

                    <div className="col-md-5">
                        <div className="cp-promo-card cp-bg-cookies">
                            <div className="cp-promo-overlay">
                                <span className="cp-promo-count">0 Products</span>
                                <span className="cp-promo-category">Uncategorized</span>
                                <h2 className="cp-promo-title">Hot cookies are ready!</h2>
                                <button className="cp-promo-btn">Order Now!</button>
                            </div>
                        </div>

                        <div className="cp-promo-card cp-bg-creams mt-4">
                            <div className="cp-promo-overlay">
                                <h2 className="cp-promo-title">Colorful Creams!</h2>
                                <button className="cp-promo-btn">Order Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid row mt-5">
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 style={{ marginLeft: "30px" }}>Kitchen Products</h4>

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
                            style={{
                                transform: `translateX(-${index * (100 / visibleCards)}%)`
                            }}
                        >
                            {productsData.map((item) => (
                                <div
                                    className="kitchen-product-card"
                                    key={item.id}
                                    style={{ flex: `0 0 ${100 / visibleCards}%` }}
                                >
                                    <div className="product-card-inner">

                                        <div className="kitchen-product-img-wrapper">
                                            <img src={item.img} alt={item.name} />

                                            <div className="product-hover-icons">
                                                <button onClick={() => kgAddToCart(item)}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                                <button onClick={() => addToCompare(item)}>
                                                    <i className="fas fa-sync"></i>
                                                </button>
                                                <button onClick={() => kgOpenQuickView(item)}>
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button onClick={() => ggwAddToWishlist(item)}>
                                                    <i className="far fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="product-content">

                                            <div className="rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`fa-star ${i < item.rating ? "fas active-star" : "far"
                                                            }`}
                                                    ></i>
                                                ))}
                                            </div>

                                            <h6>{item.name}</h6>

                                            <div className="kitchen-price">
                                                <span className="old-price">${item.oldPrice}</span>
                                                <span className="new-price">${item.price}</span>
                                            </div>

                                            <div className="product-bottom-badges">
                                                {item.badge && (
                                                    <span className={`badge-${item.badge.toLowerCase()}`}>
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
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

                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div className="promo-card1 promo-purple">
                                <p className="promo-text">30% discount on promotional products!</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="promo-card1 promo-green">
                                <p className="promo-text">Extra 10% discount for members!</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-3 col-md-4 mb-4">
                            <div className="hps-left-hero">
                                <img src={heroImage} alt="Groceries" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <ProductBlock
                                title="Featured"
                                products={featuredProducts}
                                blockRef={featuredRef}
                                uniqueName="featuredUnique"
                            />
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <ProductBlock
                                title="On Sale"
                                products={onSaleProducts}
                                blockRef={saleRef}
                                uniqueName="saleUnique"
                            />
                        </div>

                        <div className="col-lg-3 col-md-12 mb-4">
                            <ProductBlock
                                title="Bestseller"
                                products={bestsellerProducts}
                                blockRef={bestRef}
                                uniqueName="bestUnique"
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="pbs-promo-card"
                                style={{ backgroundImage: `url(${bg1})` }}
                            >
                                <div className="pbs-card-content">
                                    <h4>Daily Milk & Eggs</h4>
                                    <button className="pbs-order-btn">Order Now!</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div
                                className="pbs-promo-card"
                                style={{ backgroundImage: `url(${bg2})` }}
                            >
                                <div className="pbs-card-content">
                                    <h4>Colorful Creams!</h4>
                                    <button className="pbs-order-btn">Order Now!</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div
                                className="pbs-promo-card"
                                style={{ backgroundImage: `url(${bg3})` }}
                            >
                                <div className="pbs-card-content text-start">
                                    <p className="pbs-small-text">0 Products</p>
                                    <p className="pbs-small-text">Uncategorized</p>
                                    <h4>Hot cookies are ready!</h4>
                                    <button className="pbs-order-btn">Order Now!</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row kitchen-slider-container mt-5">

                        <div className="col-lg-3 col-md-4 mb-4">
                            <div className="hps-left-hero">
                                <img src={verticalbanner1} alt="Groceries" />
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8">

                            <div
                                className="kitchen-slider-track"
                                style={{
                                    transform: `translateX(-${index * (100 / visibleCards)}%)`
                                }}
                            >
                                {productsData.map((item) => (
                                    <div
                                        className="kitchen-product-card"
                                        key={item.id}
                                        style={{ flex: `0 0 ${100 / visibleCards}%` }}
                                    >
                                        <div className="product-card-inner">

                                            <div className="kitchen-product-img-wrapper">
                                                <img src={item.img} alt={item.name} />

                                                <div className="product-hover-icons">
                                                    <button onClick={() => kgAddToCart(item)}>
                                                        <i className="fas fa-shopping-bag"></i>
                                                    </button>
                                                    <button onClick={() => addToCompare(item)}>
                                                        <i className="fas fa-sync"></i>
                                                    </button>
                                                    <button onClick={() => kgOpenQuickView(item)}>
                                                        <i className="fas fa-eye"></i>
                                                    </button>
                                                    <button onClick={() => ggwAddToWishlist(item)}>
                                                        <i className="far fa-heart"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="product-content">

                                                <div className="rating">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i
                                                            key={i}
                                                            className={`fa-star ${i < item.rating ? "fas active-star" : "far"
                                                                }`}
                                                        ></i>
                                                    ))}
                                                </div>

                                                <h6>{item.name}</h6>

                                                <div className="kitchen-price">
                                                    <span className="old-price">${item.oldPrice}</span>
                                                    <span className="new-price">${item.price}</span>
                                                </div>

                                                <div className="product-bottom-badges">
                                                    {item.badge && (
                                                        <span className={`badge-${item.badge.toLowerCase()}`}>
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pbs-brand-section mt-5">
                        <h4 className="mb-4">Shop By Brands</h4>

                        <div className="row text-center g-4">

                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <div key={item} className="col-lg-1 col-md-3 col-4">
                                    <div className="pbs-brand-item">
                                        <img src={brandLogo} alt={`Brand ${item}`} />
                                        <p>BRAND #{item}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="igx-section container-fluid">
                        <div className="igx-header d-flex justify-content-between align-items-center">

                            <h4 className="igx-title">Follow On Instagram</h4>

                            <div className="igx-nav">
                                <button className="igx-btn" onClick={() => scrollLeft()}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button className="igx-btn" onClick={() => scrollRight()}>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>

                        </div>

                        <div className="igx-slider" ref={sliderRef}>
                            {instaimgs.map((item, index) => (
                                <div className="igx-card" key={index}>
                                    <img src={item.img} alt="instagram" />
                                </div>
                            ))}
                        </div>
                    </div>



                </div>


                <div className="col-lg-3">
                    <div className="kg-promo-sidebar mt-5" style={{ backgroundImage: `url(${sidebar1})` }}>
                        <div className="kg-sidebar-overlay">
                            <h5 className="kg-sidebar-title">Dairy products</h5>
                            <button className="kg-sidebar-btn">Order Now!</button>
                        </div>
                    </div>

                    <div className="vf-slider-wrapper mt-3">

                        <div className="vf-slider-header">
                            <h4>Newest</h4>

                            <div className="vf-slider-controls">
                                <button
                                    className="vf-prev-btn"
                                    onClick={vfPrevSlide}
                                    disabled={vfCurrentIndex === 0}
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>

                                <button
                                    className="vf-next-btn"
                                    onClick={vfNextSlide}
                                    disabled={vfCurrentIndex >= productsData.length - vfVisibleCount}
                                >                                        <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="vf-slider-viewport">
                            <div
                                className="vf-slider-track"
                                style={{
                                    transform: `translateY(-${vfCurrentIndex * 110}px)`
                                }}
                            >
                                {productsData.map((item) => (
                                    <div className="vf-product-card" key={item.id}>

                                        <div className="vf-product-image">
                                            <img src={item.img} alt={item.name} />

                                            <div className="vf-hover-icons">
                                                <button onClick={() => kgOpenQuickView(item)}>
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button onClick={() => kgAddToCart(item)}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                                <button onClick={() => addToCompare(item)}>
                                                    <i className="fas fa-sync"></i>
                                                </button>

                                                <button onClick={() => ggwAddToWishlist(item)}>
                                                    <i className="far fa-heart"></i>
                                                </button>

                                            </div>
                                        </div>

                                        <div className="vf-product-info">
                                            <span className="vf-stock">IN STOCK</span>
                                            <h6>{item.name}</h6>

                                            <div className="vf-price">
                                                <span className="vf-old">${item.oldPrice}</span>
                                                <span className="vf-new">${item.price}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="promo-card">
                        <img src={sidebar2} alt="Hot Cookies" />
                        <div className="promo-content">
                            <h5>Hot cookies are ready!</h5>
                            <button className="btn btn-dark btn-sm rounded-pill">Order Now!</button>
                        </div>
                    </div>


                    <div className="vf-slider-wrapper mt-3">

                        <div className="vf-slider-header">
                            <h4>Featured</h4>

                            <div className="vf-slider-controls">
                                <button
                                    className="vf-prev-btn"
                                    onClick={vfPrevSlide}
                                    disabled={vfCurrentIndex === 0}
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>

                                <button
                                    className="vf-next-btn"
                                    onClick={vfNextSlide}
                                    disabled={vfCurrentIndex >= productsData.length - vfVisibleCount}
                                >                                        <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="vf-slider-viewport">
                            <div
                                className="vf-slider-track"
                                style={{
                                    transform: `translateY(-${vfCurrentIndex * 110}px)`
                                }}
                            >
                                {productsData.map((item) => (
                                    <div className="vf-product-card" key={item.id}>

                                        <div className="vf-product-image">
                                            <img src={item.img} alt={item.name} />

                                            <div className="vf-hover-icons">
                                                <button onClick={() => kgOpenQuickView(item)}>
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button onClick={() => kgAddToCart(item)}>
                                                    <i className="fas fa-shopping-bag"></i>
                                                </button>
                                                <button onClick={() => addToCompare(item)}>
                                                    <i className="fas fa-sync"></i>
                                                </button>

                                                <button onClick={() => ggwAddToWishlist(item)}>
                                                    <i className="far fa-heart"></i>
                                                </button>

                                            </div>
                                        </div>

                                        <div className="vf-product-info">
                                            <span className="vf-stock">IN STOCK</span>
                                            <h6>{item.name}</h6>

                                            <div className="vf-price">
                                                <span className="vf-old">${item.oldPrice}</span>
                                                <span className="vf-new">${item.price}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="fruit-container py-5">
                        <div className="container custom-wrapper">

                            <section className="hero-fruit-section position-relative mb-4">
                                <div className="hero-content-overlay p-4">
                                    <p className="text-muted mb-1">Uncategorized</p>
                                    <h1 className="fw-bold">Fresh Fruits!</h1>
                                    <button className="btn btn-dark btn-order mt-auto">Order Now!</button>
                                </div>
                            </section>

                            <section className="testimonial-section mb-4">
                                <h2 className="testimonial-title mb-3">Testimonials</h2>
                                <div className="testimonial-card text-center p-5">
                                    <p className="testimonial-text mb-4">
                                        This is due to their excellent service, competitive pricing and customer support.
                                        It's thoroughly refreshing to get such a personal touch.
                                    </p>
                                    <h4 className="fw-bold mb-0">Bradley Kim</h4>
                                    <small className="text-uppercase tracking-wider">Customer</small>
                                </div>
                            </section>

                            <section className="features-stack d-flex flex-column gap-2">
                                <div className="feature-item item-shipping d-flex align-items-center p-3">
                                    <span className="feature-icon me-3"><i className="fa-solid fa-truck"></i></span>
                                    <span className="feature-label">World Class Free Shipping</span>
                                </div>
                                <div className="feature-item item-secured d-flex align-items-center p-3">
                                    <span className="feature-icon me-3"><i className="fa-solid fa-shield"></i></span>
                                    <span className="feature-label">Secured Shopping</span>
                                </div>
                                <div className="feature-item item-cards d-flex align-items-center p-3">
                                    <span className="feature-icon me-3"><i className="fa-solid fa-credit-card"></i></span>
                                    <span className="feature-label">Credit Cards</span>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

            </div>


            <div className={`compare-sidebar ${isCompareOpen ? "open" : ""}`}>
                <div className="compare-header">
                    <h5>Your Compared Products</h5>
                    <i className="fas fa-times" onClick={() => setIsCompareOpen(false)}></i>
                </div>

                {compareItems.length === 0 && (
                    <p className="empty-compare">No products added.</p>
                )}

                {compareItems.map((item) => (
                    <div className="compare-item" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <span>${item.price}</span>
                        </div>
                        <i
                            className="fas fa-trash"
                            onClick={() => removeFromCompare(item.id)}
                        ></i>
                    </div>
                ))}
            </div>

            <div
                className={`compare-overlay ${isCompareOpen ? "active" : ""}`}
                onClick={() => setIsCompareOpen(false)}
            ></div>

            <div className={`kg-cart-overlay ${kgIsCartOpen ? "active" : ""}`}
                onClick={() => setKgIsCartOpen(false)}></div>

            <div className={`kg-cart-sidebar ${kgIsCartOpen ? "open" : ""}`}>

                <div className="kg-cart-header">
                    <button onClick={() => setKgIsCartOpen(false)}>✕</button>
                    <h5>Your Cart</h5>
                </div>

                <div className="kg-cart-body">

                    {kgCartItems.length === 0 && (
                        <p className="text-center">Your cart is empty</p>
                    )}

                    {kgCartItems.map((item) => (
                        <div key={item.id} className="kg-cart-item">

                            <img src={item.img} alt={item.name} />

                            <div className="kg-cart-details">
                                <h6>{item.name}</h6>
                                <p>${item.price} x {item.qty}</p>

                                <div className="kg-qty-control">
                                    <button onClick={() => kgDecreaseQty(item.id)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => kgIncreaseQty(item.id)}>+</button>
                                </div>
                            </div>

                            <i
                                className="fas fa-trash kg-remove-icon"
                                onClick={() => kgRemoveItem(item.id)}
                            ></i>

                        </div>
                    ))}

                </div>

                {ggwIsWishlistOpen && (
                    <div
                        className="ggw-wishlist-overlay"
                        onClick={() => setGgwIsWishlistOpen(false)}
                    ></div>
                )}

                <div className={`ggw-wishlist-sidebar ${ggwIsWishlistOpen ? "ggw-active" : ""}`}>
                    <div className="ggw-wishlist-header d-flex justify-content-between align-items-center">
                        <h5>Your Wishlist</h5>
                        <i
                            className="fas fa-times ggw-close-icon"
                            onClick={() => setGgwIsWishlistOpen(false)}
                        ></i>
                    </div>

                    <div className="ggw-wishlist-body">
                        {ggwWishlistItems.length === 0 ? (
                            <p className="text-muted">No products in wishlist.</p>
                        ) : (
                            ggwWishlistItems.map((item) => (
                                <div key={item.id} className="ggw-wishlist-item d-flex">
                                    <img src={item.img} alt="" />

                                    <div className="ggw-wishlist-info">
                                        <span className="ggw-stock">{item.stock}</span>
                                        <h6>{item.name}</h6>
                                        <p className="ggw-price">
                                            <del>${item.oldPrice}</del> ${item.price}
                                        </p>
                                    </div>

                                    <i
                                        className="fas fa-trash ggw-remove-icon"
                                        onClick={() => ggwRemoveFromWishlist(item.id)}
                                    ></i>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="kg-cart-footer">
                    <div className="kg-subtotal">
                        <span>SUBTOTAL:</span>
                        <strong>${kgSubtotal.toFixed(2)}</strong>
                    </div>

                    <p className="kg-shipping-text">
                        Free shipping on all orders over $450
                    </p>

                    <div className="kg-cart-buttons">
                        <button
                            className="kg-view-cart-btn"
                            onClick={() => {
                                setKgIsCartOpen(false);
                                navigate("/cart");
                            }}
                        >
                            View Cart
                        </button>
                        <button className="kg-checkout-btn">Checkout</button>
                    </div>
                </div>

            </div>

            {ggwIsAccountOpen && (
                <div
                    className="ggw-account-overlay"
                    onClick={() => setGgwIsAccountOpen(false)}
                ></div>
            )}

            <div className={`ggw-account-modal ${ggwIsAccountOpen ? "ggw-active" : ""}`}>

                <div className="ggw-account-close">
                    <i
                        className="fas fa-times"
                        onClick={() => setGgwIsAccountOpen(false)}
                    ></i>
                </div>

                <div className="ggw-account-tabs d-flex justify-content-between">
                    <span className="ggw-active-tab">
                        Sign In <i className="fas fa-arrow-right"></i>
                    </span>
                    <span>
                        <i className="far fa-user"></i> Register
                    </span>
                </div>

                <div className="ggw-account-form">

                    <div className="mb-3">
                        <label>Username or email *</label>
                        <input
                            type="text"
                            className="form-control ggw-input"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password *</label>
                        <input
                            type="password"
                            className="form-control ggw-input"
                        />
                    </div>

                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">
                            Remember me
                        </label>
                    </div>

                    <button className="ggw-login-btn w-100">
                        Login
                    </button>

                    <p className="ggw-lost-password mt-3">
                        Lost your password?
                    </p>

                </div>
            </div>

            {kgQuickViewProduct && (
                <div className="kg-qv-overlay">
                    <div className="kg-qv-modal-wrapper">

                        <button
                            className="kg-qv-close-btn"
                            onClick={kgCloseQuickView}
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="row align-items-center">

                            <div className="col-md-5 text-center">
                                <div className="kg-qv-image-box">

                                    <img
                                        src={
                                            kgQuickViewProduct.images
                                                ? kgQuickViewProduct.images[kgQuickViewIndex]
                                                : kgQuickViewProduct.img
                                        }
                                        alt={kgQuickViewProduct.name}
                                        className="img-fluid kg-qv-main-img"
                                    />

                                    {kgQuickViewProduct.images?.length > 1 && (
                                        <>
                                            <button
                                                className="kg-qv-prev-btn"
                                                onClick={() =>
                                                    setKgQuickViewIndex(
                                                        kgQuickViewIndex === 0
                                                            ? kgQuickViewProduct.images.length - 1
                                                            : kgQuickViewIndex - 1
                                                    )
                                                }
                                            >
                                                <i className="fas fa-chevron-left"></i>
                                            </button>

                                            <button
                                                className="kg-qv-next-btn"
                                                onClick={() =>
                                                    setKgQuickViewIndex(
                                                        kgQuickViewIndex ===
                                                            kgQuickViewProduct.images.length - 1
                                                            ? 0
                                                            : kgQuickViewIndex + 1
                                                    )
                                                }
                                            >
                                                <i className="fas fa-chevron-right"></i>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-7">

                                <h3 className="kg-qv-title">
                                    {kgQuickViewProduct.name}
                                </h3>

                                <div className="kg-qv-price-box">
                                    {kgQuickViewProduct.oldPrice && (
                                        <span className="kg-qv-old-price">
                                            {kgQuickViewProduct.oldPrice}
                                        </span>
                                    )}
                                    <span className="kg-qv-new-price">
                                        {kgQuickViewProduct.price}
                                    </span>
                                </div>

                                <p className="kg-qv-description">
                                    {kgQuickViewProduct.description}
                                </p>



                                <div className="kg-qv-meta">
                                    <p>
                                        <strong>Category:</strong>{" "}
                                        {kgQuickViewProduct.category || "Fresh Produce"}
                                    </p>
                                    <p>
                                        <strong>Tags:</strong>{" "}
                                        {kgQuickViewProduct.tags || "Bestseller"}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            <section className="gf-register-section">
                <div className="container gf-register-wrapper">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <h4 className="gf-register-title">
                                Get a surprise discount by registering!
                            </h4>

                            <div className="gf-register-form d-flex">
                                <input
                                    type="email"
                                    placeholder="Your E-mail"
                                    className="form-control gf-input"
                                />
                                <button className="gf-submit-btn">Submit</button>
                            </div>
                        </div>

                        <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                            <p className="gf-call-text">CALL OUR CALL CENTER</p>
                            <h4 className="gf-call-number">+1 (800) 634 97 25</h4>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="gf-footer-section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-4">
                            <h5 className="gf-footer-heading">About Company</h5>
                            <p className="gf-footer-text">
                                Pellentesque habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                feugiat vitae, ultricies eget, tempor sit amet, ante.
                            </p>

                            <div className="gf-social-icons">
                                <i className="fab fa-whatsapp"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-dribbble"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-behance"></i>
                            </div>

                            <h6 className="gf-download-title">
                                Download APP for fast and secure shopping:
                            </h6>

                            <div className="gf-app-images">
                                <img src={appstoreImg} alt="App Store" />
                                <img src={playstoreImg} alt="Google Play" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 mb-4">
                            <h6 className="gf-footer-heading">Links</h6>
                            <ul className="gf-footer-list">
                                <li>GreenGrocery INC</li>
                                <li>About Us</li>
                                <li>Company</li>
                                <li>Careers</li>
                                <li>Brands</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 mb-4">
                            <h6 className="gf-footer-heading">Campaigns</h6>
                            <ul className="gf-footer-list">
                                <li>Campaign of the Week</li>
                                <li>%50 Sales</li>
                                <li>Pre-Sale</li>
                                <li>Bakery</li>
                                <li>Outlet</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 mb-4">
                            <h6 className="gf-footer-heading">Pages</h6>
                            <ul className="gf-footer-list">
                                <li>Order Tracking</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Tutorials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 mb-4">
                            <h6 className="gf-footer-heading">Help</h6>
                            <ul className="gf-footer-list">
                                <li><i className="fab fa-facebook-messenger me-2"></i>Facebook Chat</li>
                                <li><i className="fab fa-whatsapp me-2"></i>Whatsapp Help</li>
                                <li><i className="fas fa-envelope me-2"></i>E-mail Support</li>
                                <li><i className="fas fa-comment me-2"></i>Contact</li>
                            </ul>
                        </div>

                    </div>

                    <div className="gf-footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div className="gf-policy-links">
                            PRIVACY POLICY | RETURNS POLICY | FAQ
                        </div>

                        <div className="gf-bottom-icons">
                            <i className="fab fa-dribbble"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-behance"></i>
                        </div>

                        <div className="gf-payment-img">
                            <img src={paymentImg} alt="Payments" />
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}