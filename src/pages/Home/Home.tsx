import { Link } from "react-router";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTItle/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import HeroImage from "../../components/HeroImage/HeroImage";

const Home = () => {
  return (
    <>
      <div className="font-sans text-[#1F1F1F]">
        {/* Hero Section */}
        <section className="px-8">
          <HeroImage
            imageLink="/src/assets/Home/hero-section.jpg"
            title="Musician performing"
          >
            <span className="flex gap-2 items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7502 28.0416L20.0002 24.875L25.2502 28.0833L23.8752 22.0833L28.5002 18.0833L22.4168 17.5416L20.0002 11.875L17.5835 17.5L11.5002 18.0416L16.1252 22.0833L14.7502 28.0416ZM9.7085 35L12.4168 23.2916L3.3335 15.4166L15.3335 14.375L20.0002 3.33331L24.6668 14.375L36.6668 15.4166L27.5835 23.2916L30.2918 35L20.0002 28.7916L9.7085 35Z"
                  fill="white"
                />
              </svg>

              <span className="text-[28px] drop-shadow-lg">Featured</span>
            </span>
          </HeroImage>
          {/* <div className="hero-image relative rounded">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-[40px] font-medium"></p>
            </div>
          </div> */}
        </section>

        {/* Collections */}
        <section className="px-8 mt-12">
          <SectionTitle>Explore our Collections</SectionTitle>
          <div className="flex justify-end">
            <Link to="/collections">View all →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <img
                src="/src/assets/Home/books.png"
                alt="Books"
                className="w-full rounded"
              />
              <p className="mt-2 font-medium">Books</p>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/Home/government-publications.png"
                alt="Government Publications"
                className="w-full rounded"
              />
              <p className="mt-2 font-medium">Government Publications</p>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/Home/images.png"
                alt="Images"
                className="w-full rounded"
              />
              <p className="mt-2 font-medium">Images</p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="px-6 mt-16 ">
          <SectionTitle>About Us</SectionTitle>
          <div className="flex gap-8 items-center">
            <div className="basis-2/3 text-[28px] text-justify">
              <p className="mb-4">
                Public Domain is a pioneering initiative by{" "}
                <a className="underline">Free Knowledge Africa</a>, in
                partnership with the National Library of Nigeria and Cultural
                Heritage Institutions, dedicated to making public domain works
                accessible to all. Our mission is to digitize, preserve, and
                share Nigeria’s rich cultural and historical heritage, allowing
                anyone to explore and learn from these valuable resources.
              </p>
              <p className="font-bold">Vision and Mission Statement:</p>
              <ul className="my-3 list-inside list-disc">
                <li>
                  <strong>Vision:</strong>To empower communities with free
                  access to knowledge and promote cultural heritage preservation
                  through digital transformation.
                </li>
                <li>
                  <strong>Mission:</strong> To digitize and disseminate public
                  domain works, fostering a deeper understanding and
                  appreciation of Nigeria’s historical, cultural, and literary
                  contributions to the world.
                </li>
              </ul>

              <Button inputClass="!mt-4">
                <Link to="/about">See More</Link>
              </Button>
            </div>
            <img
              src="/src/assets/Home/about.png"
              alt="Audience"
              className="basis-1/3 h-auto w-full rounded"
            />
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm></ContactForm>
      </div>
    </>
  );
};

export default Home;
