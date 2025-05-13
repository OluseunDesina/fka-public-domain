import React, { useState } from "react";
import CollectionList from "../../components/CollectionList/CollectionList";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const activeClass = "!bg-[#3C6D59] !text-white";
  const categories = [
    {
      title: "Government Publications",
      image: "/src/assets/collections/government-publications.png",
    },
    { title: "Newspaper", image: "/src/assets/collections/newspaper.png" },
    { title: "Images", image: "/src/assets/collections/images.png" },
    { title: "Books", image: "/src/assets/collections/books.png" },
    {
      title: "Public Figures",
      image: "/src/assets/collections/public-figures.png",
    },
  ];

  const featuredCollections = [
    {
      title: "The Nigerian Handbook",
      type: "Book",
      description:
        "Published in 1922 by the Nigerian Chief Secretary's Office, this handbook provides insights into Nigeria's administrative and cultural landscape during the early 20th century.",
      image: "/src/assets/collections/featured-book-collection.png",
    },
    {
      title: "Nigerian Map",
      type: "Image",
      description: "Nigerian map Outline. Courtesy: Wikimedia Commons",
      image: "/src/assets/collections/featured-map-collection.png",
    },
    {
      title: "Nigerian Tribune, August 8, 1974",
      type: "Newspaper",
      description: "Nigerian newspaper. Publication date: August 8, 1974",
      image: "/src/assets/collections/feature-newspaper-collection.png",
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="flex items-center px-2 w-full border rounded-lg ">
          <input
            type="text"
            placeholder="Type your keyword........"
            className="flex-grow px-6 py-3 focus:outline-none"
          />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <div
            onClick={() => setSelectedCategory(index)}
            key={index}
            className={`cursor-pointer flex gap-2 items-center border rounded-lg p-4 hover:shadow-md ${
              index === selectedCategory ? activeClass : ""
            }`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="object-cover rounded mb-2"
            />
            <span className="text-center font-medium text-sm">{cat.title}</span>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-lg font-semibold mb-6">Featured Collection</h2>
        <CollectionList collections={featuredCollections}></CollectionList>
      </section>
    </>
  );
};

export default Collections;
