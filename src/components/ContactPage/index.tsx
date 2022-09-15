import { useState } from "react";
import {
  SCContactPageWrapper,
  SCContentWrapper,
  SCInnerWrapper,
} from "./ContactPage.styles";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <SCContactPageWrapper id="Contact">
      <h1>Contact Me</h1>
      <SCInnerWrapper>
        <SCContentWrapper>
          <a href="https://discordapp.com/users/8655" target="_blank">
            <img src="/images/discord.svg" />
          </a>
          <a href="mailto:sean@complexlabs.co" target="_blank">
            <img src="/images/gmail.svg" />
          </a>
          <a href="https://github.com/Sean-Tisdale" target="_blank">
            <img
              style={{ backgroundColor: "#ffffff" }}
              src="/images/github.png"
            />
          </a>
        </SCContentWrapper>
        <form name="contact" onSubmit={() => {}}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            Message
            <input
              type="text"
              name="message"
              placeholder="Message"
              style={{ paddingBottom: "17vh" }}
              onChange={e => setMessage(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </SCInnerWrapper>
    </SCContactPageWrapper>
  );
};

export default ContactPage;
