import HeroImage from "../../components/HeroImage/HeroImage";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <>
      <HeroImage
        imageLink="/src/assets/contact-hero.jpg"
        title="Contact Us"
      ></HeroImage>
      {/* Contact Form */}
      <ContactForm></ContactForm>
    </>
  );
};

export default ContactUs;
