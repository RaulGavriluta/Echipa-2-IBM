import { useState } from "react";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import Icon from "../components/atoms/Icon";
import Logo from "../components/atoms/Logo";
import RangeSlider from "../components/atoms/RangeSlider";
import SearchBar from "../components/atoms/SearchBar";
import NewsletterForm from "../components/molecules/NewsletterForm";
import ProductCard from "../components/molecules/ProductCard";
import CategoryItem from "../components/molecules/CategoryItem";
import HeaderAction from "../components/molecules/HeaderAction";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { FaStar, FaRegPaperPlane } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import fruitImg from "../assets/categories/fruitCategory.png";
import dairyImg from "../assets/categories/dairyCategory.png";
import bakingImg from "../assets/categories/bakingCategory.png";
import clothingImg from "../assets/categories/clothingCategory.png";
import petfoodImg from "../assets/categories/petfoodCategory.png";
import "./Home.css";

function Home() {
  const [low, setLow] = useState(500);
  const [high, setHigh] = useState(2500);

  return (
    <div className="showcase">
      <div className="showcase-group">
        <div className="showcase-row">
          <Badge variant="hot">Hot</Badge>
          <Badge variant="sale">Sale</Badge>
          <Badge variant="new">New</Badge>
          <Badge variant="discount">-25%</Badge>
          <Badge variant="count">142</Badge>
          <Badge variant="notification">3</Badge>
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="newsletter">Newsletter</Button>
        </div>
        <div className="showcase-row">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
        <div className="showcase-row">
          <Button variant="primary" fullWidth>
            Full Width Button
          </Button>
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <Icon icon={FiShoppingCart} size="1.5rem" />
          <Icon icon={FiHeart} size="1.5rem" color="red" />
          <Icon icon={FiUser} size="1.5rem" />
          <Icon icon={FaStar} size="1.5rem" color="gold" />
          <Icon icon={FaRegPaperPlane} size="1.5rem" />
          <Icon icon={FaMagnifyingGlass} size="1.5rem" />
        </div>
        <div className="showcase-row">
          <Icon src={fruitImg} size="2rem" alt="Fruit" />
          <Icon src={dairyImg} size="2rem" alt="Dairy" />
          <Icon src={bakingImg} size="2rem" alt="Baking" />
        </div>
      </div>

      <div className="showcase-group ">
        <div className="showcase-row showcase-row--align-end">
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
        </div>
      </div>

      <div className="showcase-group range-slider-group">
        <div className="showcase-row">
          <RangeSlider
            min={0}
            max={5000}
            step={100}
            valueLow={low}
            valueHigh={high}
            onChange={(l, h) => {
              setLow(l);
              setHigh(h);
            }}
          />
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <SearchBar placeholder="Search for items..." />
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <NewsletterForm />
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <ProductCard
            image="/src/assets/products/ProductTest.jpg"
            title="Leather Bound Diary"
            category="Stationery"
            oldPrice={2.99}
            currentPrice={2.0}
            rating={5}
            seller="Echipa 2"
            badgeText="New"
            badgeVariant="new"
          />
          <ProductCard
            image="/src/assets/products/ProductTest.jpg"
            title="Organic Honey"
            category="Food"
            oldPrice={12.5}
            currentPrice={9.99}
            rating={4}
            seller="BioFarm"
            badgeText="Sale"
            badgeVariant="sale"
          />
          <ProductCard
            image="/src/assets/products/ProductTest.jpg"
            title="Premium Coffee Beans"
            category="Beverages"
            currentPrice={15.99}
            rating={5}
            seller="Coffee Co."
            badgeText="Hot"
            badgeVariant="hot"
          />
          <ProductCard
            image="/src/assets/products/ProductTest.jpg"
            title="Simple Product"
            category="Misc"
            currentPrice={4.5}
          />
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <CategoryItem label="Fruits" count={42} iconSrc={fruitImg} />
          <CategoryItem label="Dairy" count={18} iconSrc={dairyImg} />
          <CategoryItem
            label="Baking"
            count={56}
            iconSrc={bakingImg}
            isActive
          />
          <CategoryItem label="Clothing" count={31} iconSrc={clothingImg} />
          <CategoryItem label="Pet Food" count={9} iconSrc={petfoodImg} />
        </div>
      </div>

      <div className="showcase-group">
        <div className="showcase-row">
          <HeaderAction icon={FiShoppingCart} label="Cart" count={3} />
          <HeaderAction icon={FiHeart} label="Wishlist" count={12} />
          <HeaderAction icon={FiUser} label="Account" />
          <HeaderAction icon={FiUser} label="Link (to)" to="/" />
        </div>
      </div>
    </div>
  );
}

export default Home;
