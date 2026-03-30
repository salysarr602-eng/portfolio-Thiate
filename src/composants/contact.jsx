import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contactez-moi</h1>

      <p>
        Je suis disponible pour des projets React, frontend ou freelance.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <input type="text" placeholder="Sujet" />
        <textarea placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-info">
        /*<p>📧 Email : salysarr602@gmail.com</p>
        <p>📱 WhatsApp : +221 782678229</p>
        <p> Sénégal</p>
      </div>
    </div>
  );
}

export default Contact;