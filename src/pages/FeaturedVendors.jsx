import React from "react";

const vendors = [
  {
    name: "Tech Plaza",
    location: "Surulere, Lagos",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", // tech gadgets
  },
  {
    name: "Fresh Mart",
    location: "Ikeja, Lagos",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=400&q=80", // fresh fruits and vegetables
  },
  {
    name: "Style Garage",
    location: "Lekki, Lagos",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80", // fashion clothes
  },
  {
    name: "Glow Beauty Hub",
    location: "Ajah, Lagos",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80", // beauty products
  },
  {
    name: "Elite Phones",
    location: "Yaba, Lagos",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", // smartphones
  },
  {
    name: "Green Bites",
    location: "Surulere, Lagos",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // healthy food
  },
  {
    name: "Urban Wears",
    location: "Festac, Lagos",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80", // urban clothing (reused fashion image for style consistency)
  },
  {
    name: "Silver Accessories",
    location: "VI, Lagos",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=400&q=80", // jewelry and accessories
  },
];

const FeaturedVendors = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16" 
    style={{ marginTop: "-40px" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0">
        <h2 className="text-3xl font-bold leading-tight max-w-md">
          Featured <span className="text-green-600">Vendors</span>
        </h2>
        <button className="text-gray-700 text-sm flex items-center space-x-1">
          <span>See others</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {vendors.map((vendor, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-3">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-contain bg-gray-100 rounded-xl"
              loading="lazy"
            />
            <h3 className="font-semibold text-base">{vendor.name}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="w-4 h-4 mr-1 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9l-4.243 4.243a1 1 0 01-1.414 0l-4.243-4.243a7 7 0 010-9.9zm7.071 7.071a5 5 0 10-7.071-7.071 5 5 0 007.071 7.071z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{vendor.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVendors;
