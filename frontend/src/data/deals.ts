import { products } from "./products";
import type { DealProduct, Product } from "./types";

export const deals: DealProduct[] = [
  {
    id: "deal-1",
    product: products.find((p) => p.id === "p1") || products[0],
    discountPrice: 6.99,
    deadline: "2027-01-15T00:00:00.000Z",
    limit: 3,
  },
  {
    id: "deal-2",
    product: products.find((p) => p.id === "p2") || products[1],
    discountPrice: 19.99,
    deadline: "2027-04-20T00:00:00.000Z",
    limit: 2,
  },
  {
    id: "deal-3",
    product: products.find((p) => p.id === "p3") || products[2],
    discountPrice: 11.5,
    deadline: "2027-10-10T00:00:00.000Z",
    limit: 5,
  },
  {
    id: "deal-4",
    product: products.find((p) => p.id === "p8") || products[7],
    discountPrice: 27.99,
    deadline: "2027-06-01T00:00:00.000Z",
    limit: 2,
  },
];

export const dealsOfTheDay = deals;

export const getDealProduct = (deal: DealProduct): Product => {
  return {
    ...deal.product,
    id: `deal_${deal.id}_${deal.product.id}`,
    currentPrice: deal.discountPrice,
    oldPrice: deal.product.currentPrice,
    isOffer: true,
    offerLimit: deal.limit,
    dealId: deal.id,
  };
};

export default deals;
