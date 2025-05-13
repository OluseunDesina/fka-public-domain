import React from "react";
import CollectionList from "../CollectionList/CollectionList";
import HeroImage from "../HeroImage/HeroImage";

const CollectionDetails = () => {
  const relatedCollections = [
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
      <div className="my-5">
        <HeroImage imageLink="/src/assets/collections/book-details.png"></HeroImage>
      </div>
      <div className="px-32">
        <h3 className="text-black text-[48px] font-bold mb-0">
          The Nigerian Handbook
        </h3>
        <p className=" flex gap-2 items-center text-[20px] text-[#121212] mb-2">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.37503 14.5208L10 12.9375L12.625 14.5416L11.9375 11.5416L14.25 9.54163L11.2084 9.27079L10 6.43746L8.7917 9.24996L5.75003 9.52079L8.06253 11.5416L7.37503 14.5208ZM10 14.8958L6.5417 16.9791C6.38892 17.0763 6.2292 17.118 6.06253 17.1041C5.89586 17.0902 5.75003 17.0347 5.62503 16.9375C5.50003 16.8402 5.40281 16.7188 5.33336 16.5733C5.26392 16.4277 5.25003 16.2644 5.2917 16.0833L6.20836 12.1458L3.14586 9.49996C3.00697 9.37496 2.92031 9.23246 2.88586 9.07246C2.85142 8.91246 2.8617 8.75635 2.9167 8.60413C2.9717 8.4519 3.05503 8.3269 3.1667 8.22913C3.27836 8.13135 3.43114 8.06885 3.62503 8.04163L7.6667 7.68746L9.2292 3.97913C9.29864 3.81246 9.40642 3.68746 9.55253 3.60413C9.69864 3.52079 9.84781 3.47913 10 3.47913C10.1523 3.47913 10.3014 3.52079 10.4475 3.60413C10.5936 3.68746 10.7014 3.81246 10.7709 3.97913L12.3334 7.68746L16.375 8.04163C16.5695 8.0694 16.7223 8.1319 16.8334 8.22913C16.9445 8.32635 17.0278 8.45135 17.0834 8.60413C17.1389 8.7569 17.1495 8.91329 17.115 9.07329C17.0806 9.23329 16.9936 9.37552 16.8542 9.49996L13.7917 12.1458L14.7084 16.0833C14.75 16.2638 14.7361 16.4272 14.6667 16.5733C14.5973 16.7194 14.5 16.8408 14.375 16.9375C14.25 17.0341 14.1042 17.0897 13.9375 17.1041C13.7709 17.1186 13.6111 17.0769 13.4584 16.9791L10 14.8958Z"
              fill="#121212"
            />
          </svg>
          Book
        </p>
        <div className="text-justify">
          <p className="my-3">
            ​The Nigeria Handbook, published in 1922 by the Chief Secretary's
            Office of Nigeria and compiled by Alan Cuthbert Burns, serves as a
            comprehensive resource on the British colony and protectorate of
            Nigeria during the early 20th century. This fourth edition
            encompasses 313 pages, including an index, and offers detailed
            statistical and general information about the region.
          </p>

          <p className="my-3">
            The handbook provides insights into various aspects of Nigeria at
            the time, such as its administrative structure, economic activities,
            and cultural practices. It includes sections on geography,
            population demographics, trade statistics, and descriptions of local
            industries. Additionally, the publication contains advertisements
            from pages ii to xxxii, reflecting the commercial landscape of the
            period
          </p>
          <p className="my-3">
            For researchers and historians, this handbook is a valuable primary
            source, offering a snapshot of Nigeria under British colonial rule.
            It is accessible online through the Smithsonian Libraries and the
            Internet Archive, allowing for convenient consultation.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-lg font-bold mb-6">Related Collection</h2>
      <CollectionList collections={relatedCollections}></CollectionList>
    </>
  );
};

export default CollectionDetails;
