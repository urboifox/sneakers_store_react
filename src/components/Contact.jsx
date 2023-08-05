import map from "../assets/map.png";
import pin from "../assets/location.svg";
import envelope from "../assets/envelope.svg";
const Contact = () => {
  return (
    <>
      <section className="flex px-5 items-center justify-center bg-primary-100 py-20 min-h-[calc(100vh-6rem)]">
        <div className="flex-col sm:flex-row flex gap-10 lg:max-w-5xl justify-center bg-white p-10">
          <article className="flex-1 flex flex-col justify-between">
            <div className="mb-5 text-sec-300 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <img className="w-5" src={pin} /> 1234 Oceanview Avenue, Seaside
                Cove
              </p>
              <p className="flex items-center gap-2">
                <img className="w-5" src={envelope} /> dummy@mail.com
              </p>
            </div>
            <img src={map} />
          </article>
          <article className="flex flex-1 flex-col gap-5">
            <input
              type="text"
              name="name"
              className="w-full rounded-sm p-4  focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="w-full rounded-sm p-4  focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="w-full rounded-sm p-4 hideScrollBar  focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
              id="contact-message"
              placeholder="Message"
            ></textarea>
            <button className="btn-primary">SUBMIT</button>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
