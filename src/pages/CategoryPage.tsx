
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

// Import your products - this is temporary
import { allProducts } from "@/data/products";

// Price range type
type PriceRange = {
  min: number | null;
  max: number | null;
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: null, max: null });
  const [sortBy, setSortBy] = useState<string>("featured");

  // Capitalize first letter of category for display
  const formattedCategory = category ? 
    category.charAt(0).toUpperCase() + category.slice(1) : 
    "All Products";

  // Filter products by category
  let filteredProducts = category === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category.toLowerCase() === category?.toLowerCase());

  // Apply additional filters
  if (selectedTypes.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      selectedTypes.includes(product.category)
    );
  }

  if (priceRange.min !== null) {
    filteredProducts = filteredProducts.filter(product => product.price >= (priceRange.min || 0));
  }

  if (priceRange.max !== null) {
    filteredProducts = filteredProducts.filter(product => product.price <= (priceRange.max || Infinity));
  }

  // Sort products
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filteredProducts.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1));
      break;
    case "bestsellers":
      filteredProducts.sort((a, b) => (a.isBestSeller ? -1 : 1) - (b.isBestSeller ? -1 : 1));
      break;
    default:
      // "featured" - default sort
      break;
  }

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = value === "" ? null : parseFloat(value);
    setPriceRange(prev => ({
      ...prev,
      [type]: numValue
    }));
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setPriceRange({ min: null, max: null });
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className="text-3xl font-playfair font-bold mb-2">{formattedCategory}</h1>
            <p className="text-gray-600">Discover our selection of {formattedCategory.toLowerCase()} products</p>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Mobile filter button */}
            <div className="lg:hidden mb-6">
              <Button 
                variant="outline" 
                className="w-full justify-between"
                onClick={() => setShowFilters(!showFilters)}
              >
                <div className="flex items-center">
                  <SlidersHorizontal size={16} className="mr-2" />
                  Filter & Sort
                </div>
                {(selectedTypes.length > 0 || priceRange.min !== null || priceRange.max !== null) && (
                  <span className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedTypes.length + (priceRange.min !== null ? 1 : 0) + (priceRange.max !== null ? 1 : 0)}
                  </span>
                )}
              </Button>
            </div>

            {/* Filters sidebar */}
            <div className={`
              lg:block 
              ${showFilters ? 'block' : 'hidden'}
              lg:col-span-1 bg-white p-6 rounded-lg border border-gray-100
            `}>
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h2 className="font-medium text-lg">Filters</h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-pink-500 hover:underline"
                >
                  Reset all
                </button>
              </div>

              {/* Mobile close button */}
              <div className="lg:hidden absolute top-4 right-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowFilters(false)}
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Sort by */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <h3 className="font-medium mb-3">Sort By</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sort"
                      value="featured"
                      checked={sortBy === "featured"}
                      onChange={() => setSortBy("featured")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Featured
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sort"
                      value="newest"
                      checked={sortBy === "newest"}
                      onChange={() => setSortBy("newest")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Newest First
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sort"
                      value="bestsellers"
                      checked={sortBy === "bestsellers"}
                      onChange={() => setSortBy("bestsellers")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Best Sellers
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sort"
                      value="price-low"
                      checked={sortBy === "price-low"}
                      onChange={() => setSortBy("price-low")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Price: Low to High
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sort"
                      value="price-high"
                      checked={sortBy === "price-high"}
                      onChange={() => setSortBy("price-high")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Price: High to Low
                  </label>
                </div>
              </div>

              {/* Product Categories */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <h3 className="font-medium mb-3">Product Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes("Skincare")}
                      onChange={() => handleTypeToggle("Skincare")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Skincare
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes("Makeup")}
                      onChange={() => handleTypeToggle("Makeup")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Makeup
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes("Wellness")}
                      onChange={() => handleTypeToggle("Wellness")}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    Wellness
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex space-x-2 mb-2">
                  <div className="flex-1">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min === null ? '' : priceRange.min}
                      onChange={(e) => handlePriceChange('min', e.target.value)}
                      className="w-full p-2 text-sm border border-gray-200 rounded-md"
                    />
                  </div>
                  <span className="text-gray-400 flex items-center">-</span>
                  <div className="flex-1">
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max === null ? '' : priceRange.max}
                      onChange={(e) => handlePriceChange('max', e.target.value)}
                      className="w-full p-2 text-sm border border-gray-200 rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Apply filters button - mobile only */}
              <div className="mt-6 lg:hidden">
                <Button 
                  className="w-full beauty-button bg-pink-500 hover:bg-pink-600 text-white"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Products grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="font-playfair font-medium text-xl mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters or browse our other categories.
                  </p>
                  <Button 
                    onClick={resetFilters}
                    className="beauty-button bg-pink-500 hover:bg-pink-600 text-white"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
