# NEST Mart & Groceries — Frontend

> E-commerce web application for groceries, built with **React 19 + Vite + TypeScript**.

---

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Development server
bun run dev        # http://localhost:5173

# Production build
bun run build

# Preview build
bun run preview
```

---

## 🏗️ Tech Stack

| Technology         | Version | Role                            |
| ------------------ | ------- | ------------------------------- |
| React              | 19      | UI library                      |
| TypeScript         | ~6.0    | Type safety                     |
| Vite               | 8       | Build tool & dev server         |
| React Router DOM   | 7       | Client-side routing (SPA)       |
| react-helmet-async | 3       | Dynamic SEO (title, meta, og)   |
| react-icons        | 5       | Icon library (Feather Icons)    |
| clsx               | 2       | Conditional CSS class utility   |
| Vanilla CSS        | —       | Styling (no CSS framework)      |

---

## 📁 Project Structure

```
frontend/
├── index.html              # Entry HTML with meta SEO fallback
├── src/
│   ├── main.tsx            # Bootstrap React + Router + HelmetProvider
│   ├── App.tsx             # (not used directly — routes are in main.tsx)
│   ├── index.css           # Global CSS
│   │
│   ├── pages/              # Application pages
│   │   ├── Home.tsx        # Home page
│   │   ├── Shop/           # Shop page with filters and pagination
│   │   ├── Product/        # Individual product page
│   │   ├── Cart/           # Shopping cart
│   │   ├── Checkout/       # Checkout flow (3 steps)
│   │   ├── About/          # About us page
│   │   ├── Contact/        # Contact page
│   │   └── NotFound.tsx    # 404 Page
│   │
│   ├── components/
│   │   ├── atoms/          # Basic UI elements (Button, Badge, Icon, Seo...)
│   │   ├── molecules/      # Groups of atoms (ProductCard, CategoryFilter...)
│   │   ├── organisms/      # Complex sections (Navbar, Footer, PriceFilter...)
│   │   └── templates/      # Global layout (Navbar + main + Footer)
│   │
│   ├── context/
│   │   └── CartContext.tsx # Cart state management (React Context + localStorage)
│   │
│   ├── data/               # Static data and TypeScript types
│   │   ├── types.ts        # All TypeScript interfaces
│   │   ├── products.ts     # Complete list of products
│   │   ├── categories.ts   # Categories + icons
│   │   ├── homePageData.ts # Data for Home (deals, CTA, newsletter)
│   │   └── ...             # Other data files
│   │
│   └── utils/
│       ├── productUtils.ts # Filtering, sorting, paginating products
│       └── filterUtils.ts  # Building active filters (removable badges)
```

---

## 🗺️ Pages and Routes

| Route                   | Component  | Description                                  |
| ----------------------- | ---------- | -------------------------------------------- |
| `/`                     | `Home`     | Hero carousel, popular products, deals, CTA  |
| `/shop`                 | `Shop`     | Product grid with URL-based filters          |
| `/shop?category=bakery` | `Shop`     | Category filtering                           |
| `/shop?search=apple`    | `Shop`     | Text search                                  |
| `/product?id=xxx`       | `Product`  | Individual product details                   |
| `/cart`                 | `Cart`     | Shopping cart (receipt style)                |
| `/checkout`             | `Checkout` | Shipping → payment → confirmation flow       |
| `/about`                | `About`    | About company page                           |
| `/contact`              | `Contact`  | Form + locations                             |
| `*`                     | `NotFound` | 404 page                                     |

---

## 🧱 Atomic Design

Components follow the **Atomic Design** methodology:

### Atoms — basic elements without dependencies

- `Button` — button with variants (primary, secondary, ghost, outline)
- `Badge` — badge (hot, sale, new, discount)
- `Icon` — wrapper for react-icons / images
- `SearchBar` — search input field
- `RangeSlider` — dual slider for price range
- `Checkbox` — custom styled checkbox
- `Logo` — logomark
- `Seo` — dynamic meta tags injection into `<head>`

### Molecules — combinations of atoms

- `ProductCard` — product card in grid (image, title, price, rating, add button)
- `CategoryFilter` — list of categories with item counts (sidebar)
- `PriceFilter` — price slider + color/condition filters (sidebar)
- `ProductGallery` — product image gallery with thumbnails
- `ProductInfo` — product details (price, stock, seller, size variants)
- `ProductTabs` — tabs: Description / Additional Info / Reviews
- `OfferCard` — deal card with countdown timer
- `HeroCarousel` — automatic banner slideshow
- `Breadcrumb` — hierarchical navigation
- `Pagination` — page navigation
- `ShopHero` — shop page header (title + breadcrumb + active filters)
- `ShopToolbar` — controls for sort / items per page
- `NewProducts` — sidebar with the last 3 added products

### Organisms — complete sections

- `Navbar` — navigation bar (header with links + search + cart + main nav)
- `Footer` — full footer with link columns + contact + social
- `PriceFilter` — full price filter with slider
- `PopularProducts` — popular products section with tabs (Today's, Best Sellers, Top Rated)
- `ShopByCategories` — visual category grid with icons
- `ProductListsSection` — product sections (Best Sellers, New Arrivals, Most Popular)
- `NewsletterBanner` — newsletter subscription banner
- `ContactForm` — contact form

### Templates

- `Layout` — base structure: `<Navbar> + <main><Outlet/></main> + <Footer>`

---

## 🛒 Cart (State Management)

The shopping cart is managed via **React Context API** (`CartContext`):

- **Persistence**: State is saved in `localStorage` (configurable key via `VITE_CART_STORAGE_KEY`)
- **Functionalities**: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- **Limits**: Supports `offerLimit` per product (maximum quantity for deals)
- **Calculations**: `totalItems` and `totalPrice` are automatically derived from the product list
- **Hook**: `useCart()` — access context from any component

```tsx
const { addToCart, items, totalPrice } = useCart();
```

---

## 🔍 Product Filtering (Shop)

Filters are managed exclusively via **URL search params** — no additional local state:

```
/shop?category=bakery&minPrice=5&maxPrice=50&colors=red&conditions=new
```

**Flow**:

1. URL params → `filterProducts()` → filtered products
2. `sortProducts()` → sorting (featured/price/rating/newest)
3. `paginateProducts()` → slice for the current page

**Available Filter Criteria**:

- Category (`category`)
- Text Search (`search`) — in title, description, seller, tags
- Price Range (`minPrice`, `maxPrice`)
- Colors (`colors`) — comma-separated
- Condition (`conditions`) — new, refurbished, used
- Tag (`tag`)

**Active Filters** — each active filter is displayed as a removable badge in ShopHero.

---

## 🔎 Dynamic SEO

Implemented with `react-helmet-async`. The `<Seo />` component is placed on every page:

```tsx
<Seo
  title={product.title} // → "<Product Title> – NEST Mart"
  description={seoDescription} // shortDescription || description (max 160 chars)
  canonical={`/product?id=${id}`} // canonical URL
  ogImage={product.image} // og:image = product image
  ogType="product" // og:type
/>
```

| Page     | Dynamic Title                         | og:image      | noIndex |
| -------- | ------------------------------------- | ------------- | ------- |
| Home     | "Fresh Groceries Online"              | banner        | ❌      |
| Shop     | "{Category} – Shop" or "Search: ..."  | —             | ❌      |
| Product  | "{Product Title}"                     | product.image | ❌      |
| About    | "About Us"                            | —             | ❌      |
| Contact  | "Contact Us"                          | —             | ❌      |
| Cart     | "Shopping Cart"                       | —             | ✅      |
| Checkout | "Checkout"                            | —             | ✅      |
| 404      | "404 – Page Not Found"                | —             | ✅      |

Environment configuration via `.env`:

```
VITE_APP_NAME=NEST Mart & Groceries
VITE_APP_URL=https://nestmart.md
```

---

## ⚙️ Environment Variables (.env)

```env
VITE_APP_NAME=NEST Mart & Groceries
VITE_APP_URL=https://nestmart.md
VITE_CART_STORAGE_KEY=nest-cart
VITE_TAX_RATE=0.08
VITE_SHIPPING_COST=5.99
VITE_FREE_SHIPPING_THRESHOLD=50
```

---

## 💳 Checkout Flow

The checkout process consists of **3 steps**:

1. **Shipping** — address form (firstName, lastName, email, phone, address, city, state, zip, country)
2. **Payment** — card number, cardholder name, expiry, CVV (simulated, no real processing)
3. **Confirmation** — generated order number, total paid, estimated delivery date

**Calculations**:

- Subtotal from CartContext
- Tax: `subtotal × VITE_TAX_RATE` (default 8%)
- Shipping: `VITE_SHIPPING_COST` (default $5.99) — **free** if subtotal ≥ `VITE_FREE_SHIPPING_THRESHOLD`
- Grand Total = subtotal + tax + shipping

---

## 🎨 Design System

- **Font**: Google Fonts (Inter / system)
- **Colors**: Defined as CSS custom properties in `utils/colors.css`
- **No CSS Framework**: Vanilla CSS per component (each component folder has its own `.css` file)
- **Responsive**: CSS Grid and Flexbox layouts

---

## 📦 Useful Commands

```bash
bun run dev       # Dev server with HMR
bun run build     # Production build (TypeScript + Vite)
bun run preview   # Local build preview
bun run lint      # ESLint check
```

---

## 👥 Team 2 — IBM Hackathon
