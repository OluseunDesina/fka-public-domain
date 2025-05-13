import ContactForm from "../../components/ContactForm/ContactForm";
import HeroImage from "../../components/HeroImage/HeroImage";

const AboutUs = () => {
  return (
    <>
      {/* Header */}
      <HeroImage
        imageLink="/src/assets/about-hero.jpg"
        title="About Us"
      ></HeroImage>
      {/* About Us */}
      <section className="px-8 mt-5 ">
        <div className="text-[28px] text-justify">
          <p className="mb-4">
            Public Domain is a pioneering initiative by{" "}
            <a className="underline">Free Knowledge Africa</a>, in partnership
            with the National Library of Nigeria and Cultural Heritage
            Institutions, dedicated to making public domain works accessible to
            all. Our mission is to digitize, preserve, and share Nigeria’s rich
            cultural and historical heritage, allowing anyone to explore and
            learn from these valuable resources.
          </p>
          <p className="font-bold">Vision and Mission Statement:</p>
          <ul className="my-3 list-inside list-disc">
            <li>
              <span className="font-bolder">Vision:</span> To empower
              communities with free access to knowledge and promote cultural
              heritage preservation through digital transformation.
            </li>
            <li>
              <span className="font-bolder">Mission:</span> To digitize and
              disseminate public domain works, fostering a deeper understanding
              and appreciation of Nigeria’s historical, cultural, and literary
              contributions to the world.
            </li>
          </ul>
          <p className="font-bolder mt-10">Why Public Domain Matters:</p>
          <p>
            Access to public domain works ensures that cultural and historical
            knowledge is preserved and shared freely, enabling education,
            research, and cultural exchange. By making these works accessible,
            we bridge the gap between past and present, inspiring future
            generations.
          </p>
        </div>
      </section>
      {/* Contact Form */}
      <ContactForm></ContactForm>
    </>
  );
};

export default AboutUs;
