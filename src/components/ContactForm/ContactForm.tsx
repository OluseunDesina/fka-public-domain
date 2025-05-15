import SectionTitle from "../SectionTItle/SectionTitle";

const ContactForm = () => {
  return (
    <>
      {/* Contact Form */}
      <section className="mt-16 bg-[#E1EAE4] px-8 py-12">
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <SectionTitle>Contact Us</SectionTitle>
            <p className="text-center text-[32px] mt-2 mb-8">
              Reach out to learn more about our mission to preserve and share
              free knowledge
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <input
                className="p-3 border rounded"
                type="text"
                placeholder="First Name"
              />
              <input
                className="p-3 border rounded"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="p-3 border rounded md:col-span-2"
                type="email"
                placeholder="you@company.com"
              />
              <input
                className="p-3 border rounded md:col-span-2"
                type="tel"
                placeholder="Phone Number"
              />
              <textarea
                className="p-3 border rounded md:col-span-2"
                rows={4}
                placeholder="Message"
              ></textarea>
              <button className="bg-[#3C6D59] text-white px-6 py-2 rounded md:col-span-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
