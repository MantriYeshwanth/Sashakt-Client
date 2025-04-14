import React, { useState } from "react";
import Social from "./Social";
import Modal from "react-modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) openModal();
      else console.error("Failed to submit form");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const styles = {
    container: {
      height: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    imageContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -3,
    },
    backgroundImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    contentWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
      padding: "20px",
      boxSizing: "border-box",
    },
    card: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 0 20px 10px rgba(0,0,0,.4)",
      overflow: "hidden",
      width: "100%",
      maxWidth: "900px",
      zIndex: 2,
    },
    contactSide: {
      flex: "1 1 300px",
      backgroundColor: "rgb(235, 188, 216)",
      color: "#fff",
      padding: "20px",
      boxSizing: "border-box",
      textAlign: "center",
    },
    contactTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#E07A5F",
    },
    contactImg: {
      width: "100%",
      maxWidth: "280px",
      height: "auto",
      margin: "20px auto",
    },
    connectText: {
      marginTop: "10px",
      marginBottom: "5px",
      color: "#fff",
    },
    formSide: {
      flex: "1 1 300px",
      backgroundColor: "rgb(131, 178, 220)",
      padding: "20px",
      boxSizing: "border-box",
    },
    formTitle: {
      fontSize: "24px",
      marginBottom: "10px",
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "10px",
      borderRadius: "10px",
      border: "2px solid #fff",
      fontSize: "16px",
      backgroundColor: "transparent",
      color: "#fff",
      outline: "none",
    },
    textarea: {
      padding: "10px",
      borderRadius: "10px",
      border: "2px solid #fff",
      fontSize: "16px",
      backgroundColor: "transparent",
      color: "#fff",
      resize: "none",
      outline: "none",
    },
    button: {
      backgroundColor: "#ecf0f1",
      color: "#8f50ec",
      fontWeight: "bold",
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      alignSelf: "center",
      width: "50%",
    },
    modalStyle: {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 3,
      },
      content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "400px",
        padding: "20px",
        borderRadius: "10px",
        border: "none",
        background:
          "radial-gradient(circle, rgb(131, 178, 220) 0%, rgb(61, 139, 234) 100%)",
        zIndex: 3,
        textAlign: "center",
      },
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="/images/bade.jpg"
            alt="Background"
            style={styles.backgroundImg}
          />
        </div>
        <div style={styles.contentWrapper}>
          <div style={styles.card}>
            <div style={styles.contactSide}>
              <div style={styles.contactTitle}>Let's get in touch</div>
              <img
                src="/images/contact.jpg"
                alt="Contact"
                style={styles.contactImg}
              />
              <div style={styles.connectText}>Connect with us:</div>
              <Social />
            </div>
            <div style={styles.formSide}>
              <h4 style={styles.formTitle}>Contact Us</h4>
              <form style={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  style={styles.textarea}
                />
                <input type="submit" value="Submit" style={styles.button} />
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Thank you"
        ariaHideApp={false}
        style={styles.modalStyle}
      >
        <h2>Thank you for getting in touch!</h2>
        <p>
          We appreciate you contacting us. One of our colleagues will get back
          in touch with you soon!
        </p>
        <button
          style={{ ...styles.button, marginTop: "20px" }}
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Contact;
