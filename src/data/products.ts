import { Product } from "@/components/ProductCard";

// All product data
export const allProducts: Product[] = [
  // Skincare Products
  {
    id: 1,
    name: "Radiance Face Serum",
    description: "A brightening vitamin C serum that reduces dark spots and gives your skin a healthy glow. Enriched with antioxidants and hyaluronic acid for deep hydration.",
    price: 48.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1648712789205-4a05ebb8d026?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800",
    isNew: true
  },
  {
    id: 2,
    name: "Hydra Boost Moisturizer",
    description: "Lightweight but powerful 24-hour hydration with hyaluronic acid and ceramides to strengthen your skin barrier.",
    price: 38.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800",
    isBestSeller: true
  },
  {
    id: 3,
    name: "Botanical Eye Cream",
    description: "Reduces dark circles and puffiness with plant extracts and peptides for a brighter eye area.",
    price: 42.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1532086853747-99450c17fa2e?auto=format&fit=crop&w=800"
  },
  {
    id: 4,
    name: "Detox Clay Mask",
    description: "Deep cleansing mask with kaolin clay and activated charcoal to draw out impurities and minimize pores.",
    price: 32.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?auto=format&fit=crop&w=800"
  },
  {
    id: 5,
    name: "Rose Petal Toner",
    description: "Alcohol-free toner with rose water and aloe vera to soothe and balance the skin after cleansing.",
    price: 26.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800"
  },
  {
    id: 6,
    name: "Overnight Recovery Cream",
    description: "Rich night cream with retinol and peptides that works while you sleep to renew and repair skin.",
    price: 52.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1703174321513-b9147ccda794?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800",
    isNew: true
  },
  
  // Makeup Products
  {
    id: 7,
    name: "Soft Glow Blush",
    description: "Creamy blush that blends seamlessly for a natural flush of color that lasts all day.",
    price: 24.00,
    category: "Makeup",
    image: "https://images.pexels.com/photos/5403542/pexels-photo-5403542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&w=800"
  },
  {
    id: 8,
    name: "Satin Lipstick",
    description: "Creamy, long-lasting color with hydrating benefits that won't dry out your lips.",
    price: 22.00,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800",
    isBestSeller: true
  },
  {
    id: 9,
    name: "Beige Foundation",
    description: "Medium to full coverage foundation with a natural finish that looks like your skin but better.",
    price: 36.00,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1734077462875-e2c6abcec3bd?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800"
  },
  {
    id: 10,
    name: "Precision Eyeliner",
    description: "Waterproof liquid eyeliner with a fine tip for precise application that won't smudge or fade.",
    price: 18.00,
    category: "Makeup",
    image: "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&w=800"
  },
  {
    id: 11,
    name: "Volume Mascara",
    description: "Buildable mascara that adds volume and length without clumping or flaking.",
    price: 24.00,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800",
    isBestSeller: true
  },
  {
    id: 12,
    name: "Highlight Palette",
    description: "Four complementary highlighter shades to create a customized glow for any skin tone.",
    price: 32.00,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800",
    isNew: true
  },
  
  // Wellness Products
  {
    id: 13,
    name: "Calming Bath Salts",
    description: "A relaxing blend of Epsom salts, lavender, and chamomile to soothe mind and body.",
    price: 18.00,
    category: "Wellness",
    image: "https://images.pexels.com/photos/18083316/pexels-photo-18083316/free-photo-of-salt-for-bathing-on-bathtub-edge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&w=800"
  },
  {
    id: 14,
    name: "Glow Body Oil",
    description: "Lightweight, fast-absorbing oil with subtle shimmer for hydrated, glowing skin.",
    price: 34.00,
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800",
    isBestSeller: true
  },
  {
    id: 15,
    name: "Beauty Sleep Supplement",
    description: "Natural supplement with melatonin and adaptogens to improve sleep quality for better skin.",
    price: 28.00,
    category: "Wellness",
    image: "https://images.pexels.com/photos/29056287/pexels-photo-29056287/free-photo-of-vibrant-advertising-shot-of-beauty-supplements.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&w=800"
  },
  {
    id: 16,
    name: "Aromatherapy Candle",
    description: "Hand-poured soy candle with essential oils to create a relaxing atmosphere and reduce stress.",
    price: 26.00,
    category: "Wellness",
    image: "https://images.pexels.com/photos/6621452/pexels-photo-6621452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&w=800",
    isNew: true
  },
  {
    id: 17,
    name: "Silk Sleep Mask",
    description: "Luxuriously soft silk sleep mask that prevents creasing and helps you get better beauty sleep.",
    price: 32.00,
    category: "Wellness",
    image: "https://images.pexels.com/photos/6541428/pexels-photo-6541428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&w=800"
  },
  {
    id: 18,
    name: "Detox Tea Blend",
    description: "Organic herbal tea with antioxidants that help purify the body from within for clearer skin.",
    price: 16.00,
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800"
  }
];

// Function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.isNew || product.isBestSeller).slice(0, 6);
};

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") {
    return allProducts;
  }
  return allProducts.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
};

// Function to get a product by ID
export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};