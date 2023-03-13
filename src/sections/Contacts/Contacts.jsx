function Contact() {
  return (
    <section>
      <div id="Contacts">
        <form action="mailto:info@example.com" method="GET">
          <div>
            <input type="text" placeholder="Subject" name="subject" required />
          </div>
          <div>
            <textarea
              placeholder="Your message"
              name="body"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Send a message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
