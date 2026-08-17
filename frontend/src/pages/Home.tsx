import { useNavigate } from "react-router-dom";
import "./Home.css";
import PopularProducts from "../components/organisms/PopularProducts/PopularProducts";
import CategoryFilter from "../components/molecules/CategoryFilter";
import PriceFilter from "../components/organisms/PriceFilter";
import NewProducts from "../components/molecules/NewProducts";
import OfferCard from "../components/molecules/OfferCard/OfferCard";
import CtaCard from "../components/molecules/CtaCard/CtaCard";
import HeroCarousel from "../components/molecules/HeroCarousel";
import ShopByCategories from "../components/organisms/ShopByCategories/ShopByCategories";
import ProductListsSection from "../components/organisms/ProductListsSection/ProductListsSection";
import { products } from "../data/products";
import {
    dealsOfTheDay,
    ctaCards,
    newsletterBanner,
} from "../data/homePageData";
import NewsletterBanner from "../components/organisms/NewsletterBanner";

function Home() {
    const navigate = useNavigate();

    const categoryIcons: Record<string, string> = {
        "dairy-eggs": "/assets/categories/dairyCategory.png",
        clothing: "/assets/categories/clothingCategory.png",
        "pet-foods": "/assets/categories/petfoodCategory.png",
        "baking-material": "/assets/categories/bakingCategory.png",
        "fresh-fruit": "/assets/categories/fruitCategory.png",
        beverages: "/assets/categories/winesAlcohol.png",
        snacks: "/assets/categories/packagedFastFood.png",
        "frozen-foods": "/assets/categories/freshFruit.png",
        bakery: "/assets/categories/bakedCategory.png",
        "meats-seafood": "/assets/categories/freshFruit.png",
    };

    const dynamicCategories = Array.from(
        new Map(products.map((p) => [p.category.value, p.category])).values(),
    ).map((cat) => ({
        id: cat.value,
        label: cat.label,
        iconSrc: categoryIcons[cat.value] || "/assets/categories/fruitCategory.png",
        count: products.filter((p) => p.category.value === cat.value).length,
    }));

    const dynamicColors = [
        {
            id: "red",
            label: "Red",
            count: products.filter((p) => p.color === "red").length,
        },
        {
            id: "green",
            label: "Green",
            count: products.filter((p) => p.color === "green").length,
        },
        {
            id: "blue",
            label: "Blue",
            count: products.filter((p) => p.color === "blue").length,
        },
    ];

    const dynamicConditions = [
        {
            id: "new",
            label: "New",
            count: products.filter((p) => p.condition === "new").length,
        },
        {
            id: "refurbished",
            label: "Refurbished",
            count: products.filter((p) => p.condition === "refurbished").length,
        },
        {
            id: "used",
            label: "Used",
            count: products.filter((p) => p.condition === "used").length,
        },
    ];

    const dynamicNewProducts = [...products]
        .filter((p) => p.createdAt !== undefined)
        .sort(
            (a, b) =>
                new Date(b.createdAt || "").getTime() -
                new Date(a.createdAt || "").getTime(),
        )
        .slice(0, 3);
    const handleCategorySelect = (categoryValue: string | null) => {
        if (categoryValue) {
            navigate(`/shop?category=${categoryValue}`);
        } else {
            navigate("/shop");
        }
    };

    const handleFilterSubmit = (filters: {
        minPrice: number;
        maxPrice: number;
        selectedColors: string[];
        selectedConditions: string[];
    }) => {
        const params = new URLSearchParams();
        params.append("minPrice", filters.minPrice.toString());
        params.append("maxPrice", filters.maxPrice.toString());
        if (filters.selectedColors.length > 0) {
            params.append("colors", filters.selectedColors.join(","));
        }
        if (filters.selectedConditions.length > 0) {
            params.append("conditions", filters.selectedConditions.join(","));
        }
        navigate(`/shop?${params.toString()}`);
    };

    return (
        <div className="home-page-container">
            <section className="home-layout">
                <aside className="home-sidebar">
                    <CategoryFilter
                        categories={dynamicCategories}
                        onSelectCategory={handleCategorySelect}
                    />
                    <PriceFilter
                        minPrice={0}
                        maxPrice={150}
                        colors={dynamicColors}
                        conditions={dynamicConditions}
                        onFilterSubmit={handleFilterSubmit}
                    />
                    <NewProducts products={dynamicNewProducts} />
                </aside>

                <div className="home-body">
                    <HeroCarousel />
                    <PopularProducts />

                    <div className="home-deals">
                        <div className="home-deals-header">
                            <h2 className="home-deals-title">Deals Of The Day</h2>
                            <a href="#" className="home-deals-link">
                                All Deals &rsaquo;
                            </a>
                        </div>
                        <div className="home-deals-grid">
                            {dealsOfTheDay.map((deal) => (
                                <OfferCard
                                    key={deal.id}
                                    image={deal.image}
                                    title={deal.title}
                                    currentPrice={deal.currentPrice}
                                    oldPrice={deal.oldPrice}
                                    rating={deal.rating}
                                    seller={deal.seller ?? ""}
                                    deadline={new Date(deal.deadline)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="home-cta-grid">
                        {ctaCards.map((cta) => (
                            <CtaCard
                                key={cta.id}
                                title={cta.title}
                                imageUrl={cta.imageUrl}
                                buttonText={cta.buttonText}
                                buttonLink={cta.buttonLink}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-bottom-layout">
                <div className="home-categories">
                    <ShopByCategories />
                </div>
                <div className="home-product-metrics">
                    <ProductListsSection />
                </div>
                <div className="home-newsletter-banner">
                    <NewsletterBanner
                        title={newsletterBanner.title}
                        subtitleHighlight={newsletterBanner.description}
                        backgroundImage={newsletterBanner.imageUrl}
                        sideImage={newsletterBanner.sideImage}
                    />
                </div>
            </section>
        </div>
    );
}

export default Home;
