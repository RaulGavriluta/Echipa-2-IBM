# 🛒 Nest Mart - E-Commerce Platform

A modern e-commerce grocery web application built during the IBM Summer Internship. The project delivers a full-fledged online store experience focused on responsive design, and a modular architecture based on **Atomic Design**.

---

## 🚀 Tech Stack

* **Runtime & Package Manager:** Bun
* **Frontend:** React, TypeScript, Vite
* **Routing:** React Router v6
* **Styling:** Vanilla CSS

---

## Features & Pages

* **Home Page:** Product showcase, featured categories, daily deals, and a dynamic newsletter banner.
* **Shop & Catalog:** Product listing with filtering, sorting, price range selectors, and category breakdown.
* **Single Product Details:** Detailed product view with image gallery, pricing, stock status, ratings, reviews, and related products.
* **Blog:** Articles, recipe suggestions, health tips, and category-based post listings.
* **About Page:** Company overview, interactive statistics counter, company pillars, and a dedicated team section.
* **Contact Page:** Branch locations (Office, Studio, Shop), interactive location map, and a fully structured contact form.
* **Fully Responsive:** Optimized across all screen sizes from mobile devices (320px) to ultrawide monitors.

---

## 📁 Project Architecture

The codebase follows the **Atomic Design** methodology for clean component reusability:

```text
src/
├── assets/                  # Static assets & images (about, contact, shared, home)
├── components/
│   ├── atoms/               # Basic primitives (Button, Input, Badge, etc.)
│   ├── molecules/           # Composite components (FeatureCard, TeamCard, ContactLocationCard)
│   ├── organisms/           # Complex sections (ContactForm, NewsletterBanner, Header, Footer)
│   └── templates/           # Layout wrappers (MainLayout)
├── data/                    # Decoupled mock data (aboutData, contactData)
├── pages/                   # Application views (Home, About, Contact)
├── utils/                  # Global CSS variables, resets, and typography
├── App.tsx                  # Root application component
└── main.tsx                 # Vite entry point
```

## Getting started

1. Clone the repository

```bash
git clone [https://github.com/raulg/Echipa-2-IBM.git](https://github.com/raulg/Echipa-2-IBM.git)
cd Echipa-2-IBM/frontend
```

2. Install dependicies

```bash
bun install
```

3. Start the application
```bash
bun run dev
```

