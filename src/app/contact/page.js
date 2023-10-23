import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 style={{ marginTop: "30px" }}>Contact Us</h2>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We Love to hear <span>From You</span>
          </h2>

          <ContactForm />
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.605510543724!2d90.38426189999998!3d23.75089605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698052317111!5m2!1sen!2sbd"
          width={100}
          height={450}
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={styles.mapping}
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
