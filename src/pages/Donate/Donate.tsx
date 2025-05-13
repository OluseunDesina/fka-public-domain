import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Button from "../../components/Button/Button";

const Donate = () => {
  return (
    <>
      <HeroImage
        imageLink="/src/assets/donate-hero.jpg"
        title="Donate"
      ></HeroImage>

      <div className="flex mt-10 gap-4 px-6">
        <div className="text-justify text-[28px] basis-2/3">
          <p className="font-bold">
            Reclaiming Nigeria’s Lost History—One Archive at a Time
          </p>
          <p className="mb-8">
            We’re on a mission to digitize Nigeria’s past and make it accessible
            to all.
          </p>

          <p className="font-bold">
            The Challenge: Finding Nigerian History is Complicated
          </p>

          <p className="mb-8">
            Try searching for a song from the 1950s, a newspaper article from
            1965, or a book published in 1920. You’ll quickly realize much of
            our history is either locked away in archives or entirely lost. Your
            only option? Digging through old libraries, dusty shelves, or
            scattered private collections—if they even exist.
          </p>

          <p className="mb-8">
            “Our aim is to capture not only a snapshot of Nigeria’s political,
            social, and cultural history but also to create an open resource for
            the public, researchers, and journalists.”
          </p>

          <p className="font-bold mb-8">
            The Solution: Preserving Nigeria’s Cultural Memory
          </p>

          <p className="mb-8">
            We are tracking down lost newspapers, forgotten books, rare
            photographs, and classic Nigerian music. We scan them, digitize
            them, and make them freely available to everyone—forever.
          </p>

          <p className="font-bold">
            Imagine a Future Where Nigerian History is Instantly Accessible
          </p>

          <p className="mb-8">
            Think of a song, a newspaper, a photograph, or a book—type it into
            our archive, and find it instantly. We’re working to ensure that
            future generations can access and enjoy Nigeria’s rich history with
            ease.
          </p>

          <p className="font-bold">
            Our Ambitious Goal: Digitize and Preserve by [Year]
          </p>

          <ul className="mb-8 list-outside list-disc pl-8">
            <li>
              10,000 Newspapers capturing everyday life, politics, and culture
            </li>
            <li>
              5,000 Books from Nigerian authors, historians, and educators
            </li>
            <li>2,500 Classic songs and music recordings</li>
            <li>5,000 Historic photographs and artwork</li>
          </ul>

          <p className="mb-8">We Can’t Do This Alone. Join Us.</p>

          <p className="mb-8">
            Be part of this movement to reclaim, preserve, and share Nigeria’s
            past. Support PtublicDomain.ng today.
          </p>
        </div>
        <div className="basis-1/3">
          <img
            src="/src/assets/donate-video.png"
            className="w-full h-auto mb-5"
            alt="donation video"
          />

          <Button inputClass="!w-full">Donate</Button>
        </div>
      </div>
    </>
  );
};

export default Donate;
