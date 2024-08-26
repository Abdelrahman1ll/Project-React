import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1724623929549.json";
import contactAnimation from "../../animation/Animation - 1724626250746.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvwrjbe");
  return (
    <section className="contact-us">
      <h1 className="title">
        <samp className="icon-envelope"></samp>
        Contact-us
      </h1>
      <p className="sub-title">
        Contact us for more information and to get notified when I post
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex ">
        <form onSubmit={handleSubmit} action="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
               Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation ">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
