# NEST Mart & Groceries — Frontend

> Aplicație web de tip e-commerce pentru produse alimentare, construită cu **React 19 + Vite + TypeScript**.

---

## 🚀 Quick Start

```bash
# Instalare dependențe
bun install

# Server de dezvoltare
bun run dev        # http://localhost:5173

# Build producție
bun run build

# Preview build
bun run preview
```

---

## 🏗️ Tech Stack

| Tehnologie         | Versiune | Rol                            |
| ------------------ | -------- | ------------------------------ |
| React              | 19       | UI library                     |
| TypeScript         | ~6.0     | Type safety                    |
| Vite               | 8        | Build tool & dev server        |
| React Router DOM   | 7        | Client-side routing (SPA)      |
| react-helmet-async | 3        | SEO dinamic (title, meta, og)  |
| react-icons        | 5        | Icon library (Feather Icons)   |
| clsx               | 2        | Conditional CSS class utility  |
| Vanilla CSS        | —        | Stilizare (fără framework CSS) |

---

## 📁 Structura Proiectului

```
frontend/
├── index.html              # Entry HTML cu meta SEO fallback
├── src/
│   ├── main.tsx            # Bootstrap React + Router + HelmetProvider
│   ├── App.tsx             # (nefolosit direct — rutele sunt în main.tsx)
│   ├── index.css           # CSS global
│   │
│   ├── pages/              # Paginile aplicației
│   │   ├── Home.tsx        # Pagina principală
│   │   ├── Shop/           # Magazin cu filtre și paginare
│   │   ├── Product/        # Pagina de produs individual
│   │   ├── Cart/           # Coș de cumpărături
│   │   ├── Checkout/       # Flux checkout (3 pași)
│   │   ├── About/          # Despre noi
│   │   ├── Contact/        # Contact
│   │   └── NotFound.tsx    # Pagina 404
│   │
│   ├── components/
│   │   ├── atoms/          # Elemente UI de bază (Button, Badge, Icon, Seo...)
│   │   ├── molecules/      # Grupuri de atoms (ProductCard, CategoryFilter...)
│   │   ├── organisms/      # Secțiuni complexe (Navbar, Footer, PriceFilter...)
│   │   └── templates/      # Layout-ul global (Navbar + main + Footer)
│   │
│   ├── context/
│   │   └── CartContext.tsx # State management coș (React Context + localStorage)
│   │
│   ├── data/               # Date statice și tipuri TypeScript
│   │   ├── types.ts        # Toate interfețele TypeScript
│   │   ├── products.ts     # Lista completă de produse
│   │   ├── categories.ts   # Categorii + iconuri
│   │   ├── homePageData.ts # Date pentru Home (deals, CTA, newsletter)
│   │   └── ...             # Alte fișiere de date
│   │
│   └── utils/
│       ├── productUtils.ts # Filtrare, sortare, paginare produse
│       └── filterUtils.ts  # Construire filtre active (badge-uri removable)
```

---

## 🗺️ Pagini și Rute

| Rută                    | Componentă | Descriere                                   |
| ----------------------- | ---------- | ------------------------------------------- |
| `/`                     | `Home`     | Hero carousel, produse populare, deals, CTA |
| `/shop`                 | `Shop`     | Grid produse cu filtre URL-based            |
| `/shop?category=bakery` | `Shop`     | Filtrare pe categorie                       |
| `/shop?search=apple`    | `Shop`     | Căutare text                                |
| `/product?id=xxx`       | `Product`  | Detalii produs individual                   |
| `/cart`                 | `Cart`     | Coș de cumpărături (receipt style)          |
| `/checkout`             | `Checkout` | Flux shipping → payment → confirmare        |
| `/about`                | `About`    | Pagina despre companie                      |
| `/contact`              | `Contact`  | Formular + locații                          |
| `*`                     | `NotFound` | Pagina 404                                  |

---

## 🧱 Atomic Design

Componentele respectă metodologia **Atomic Design**:

### Atoms — elemente de bază, fără dependențe

- `Button` — buton cu variante (primary, secondary, ghost, outline)
- `Badge` — etichetă (hot, sale, new, discount)
- `Icon` — wrapper pentru react-icons / imagini
- `SearchBar` — câmp de căutare
- `RangeSlider` — slider dublu pentru interval de preț
- `Checkbox` — checkbox custom stilizat
- `Logo` — logomark
- `Seo` — injectare dinamică de meta tags în `<head>`

### Molecules — combinații de atoms

- `ProductCard` — card produs în grid (imagine, titlu, preț, rating, buton add)
- `CategoryFilter` — lista de categorii cu count (sidebar)
- `PriceFilter` — slider preț + filtre culori/condiție (sidebar)
- `ProductGallery` — galerie imagini produs cu thumbnail-uri
- `ProductInfo` — detalii produs (preț, stock, seller, size variants)
- `ProductTabs` — taburi: Description / Additional Info / Reviews
- `OfferCard` — card deal cu countdown timer
- `HeroCarousel` — slideshow automat banner
- `Breadcrumb` — navigare ierarhică
- `Pagination` — navigare pagini
- `ShopHero` — header pagina shop (titlu + breadcrumb + active filters)
- `ShopToolbar` — controale sort / items per page
- `NewProducts` — sidebar cu ultimele 3 produse adăugate

### Organisms — secțiuni complete

- `Navbar` — bara de navigare (header cu links + search + cart + main nav)
- `Footer` — footer complet cu coloane links + contact + social
- `PriceFilter` — filtru prețuri complet cu slider
- `PopularProducts` — secțiune produse populare cu tabs (Today's, Best Sellers, Top Rated)
- `ShopByCategories` — grid vizual categorii cu iconuri
- `ProductListsSection` — secțiuni produse (Best Sellers, New Arrivals, Most Popular)
- `NewsletterBanner` — banner abonare newsletter
- `ContactForm` — formular contact

### Templates

- `Layout` — structura de bază: `<Navbar> + <main><Outlet/></main> + <Footer>`

---

## 🛒 Cart (State Management)

Coșul de cumpărături este gestionat prin **React Context API** (`CartContext`):

- **Persistență**: Starea e salvată în `localStorage` (cheia configurabilă via `VITE_CART_STORAGE_KEY`)
- **Funcționalități**: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
- **Limite**: Suportă `offerLimit` per produs (maxim cantitate pentru deals)
- **Calcule**: `totalItems` și `totalPrice` sunt derivate automat din lista de produse
- **Hook**: `useCart()` — acces la context din orice componentă

```tsx
const { addToCart, items, totalPrice } = useCart();
```

---

## 🔍 Filtrare Produse (Shop)

Filtrele sunt gestionate exclusiv prin **URL search params** — fără state local suplimentar:

```
/shop?category=bakery&minPrice=5&maxPrice=50&colors=red&conditions=new
```

**Flux**:

1. URL params → `filterProducts()` → produse filtrate
2. `sortProducts()` → sortare (featured/price/rating/newest)
3. `paginateProducts()` → slice pentru pagina curentă

**Criterii filtrare disponibile**:

- Categorie (`category`)
- Căutare text (`search`) — în titlu, descriere, seller, tags
- Interval de preț (`minPrice`, `maxPrice`)
- Culori (`colors`) — comma-separated
- Condiție (`conditions`) — new, refurbished, used
- Tag (`tag`)

**Active Filters** — fiecare filtru activ e afișat ca badge removable în ShopHero.

---

## 🔎 SEO Dinamic

Implementat cu `react-helmet-async`. Componenta `<Seo />` se plasează în fiecare pagină:

```tsx
<Seo
  title={product.title} // → "<Titlu Produs> – NEST Mart"
  description={seoDescription} // shortDescription || description (max 160 chars)
  canonical={`/product?id=${id}`} // URL canonic
  ogImage={product.image} // og:image = poza produsului
  ogType="product" // og:type
/>
```

| Pagină   | Title dinamic                          | og:image      | noIndex |
| -------- | -------------------------------------- | ------------- | ------- |
| Home     | "Fresh Groceries Online"               | banner        | ❌      |
| Shop     | "{Categorie} – Shop" sau "Search: ..." | —             | ❌      |
| Product  | "{Titlu produs}"                       | product.image | ❌      |
| About    | "About Us"                             | —             | ❌      |
| Contact  | "Contact Us"                           | —             | ❌      |
| Cart     | "Shopping Cart"                        | —             | ✅      |
| Checkout | "Checkout"                             | —             | ✅      |
| 404      | "404 – Page Not Found"                 | —             | ✅      |

Configurare via `.env`:

```
VITE_APP_NAME=NEST Mart & Groceries
VITE_APP_URL=https://nestmart.md
```

---

## ⚙️ Variabile de Mediu (.env)

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

Procesul de checkout are **3 pași**:

1. **Shipping** — formular adresă (firstName, lastName, email, phone, address, city, state, zip, country)
2. **Payment** — card number, cardholder name, expiry, CVV (simulat, fără procesare reală)
3. **Confirmation** — număr comandă generat, total plătit, dată estimată livrare

**Calcule**:

- Subtotal din CartContext
- Tax: `subtotal × VITE_TAX_RATE` (default 8%)
- Shipping: `VITE_SHIPPING_COST` (default $5.99) — **gratuit** dacă subtotal ≥ `VITE_FREE_SHIPPING_THRESHOLD`
- Grand Total = subtotal + tax + shipping

---

## 🎨 Design System

- **Font**: Google Fonts (Inter / sistem)
- **Culori**: Definite ca CSS custom properties în `utils/colors.css`
- **Fără framework CSS**: Vanilla CSS per componentă (fiecare folder componentă are `.css` propriu)
- **Responsive**: Layout-uri cu CSS Grid și Flexbox

---

## 📦 Comenzi utile

```bash
bun run dev       # Dev server cu HMR
bun run build     # Build producție (TypeScript + Vite)
bun run preview   # Preview build local
bun run lint      # ESLint check
```

---

## 👥 Echipa 2 — IBM Hackathon
