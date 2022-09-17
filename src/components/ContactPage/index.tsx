import {
  SCContactPageWrapper,
  SCContentWrapper,
  SCInnerWrapper,
} from "./ContactPage.styles";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const emailBody = {
    name: userName,
    message: userMessage,
    email: userEmail,
  };

  const handleSumbit = () => {
    emailjs.send(
      "contact_service",
      "contact_form",
      emailBody,
      process.env.REACT_APP_EMAILJS_KEY as string
    );
    alert("Message Sent!");
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <SCContactPageWrapper id="Contact">
      <h1>Contact Me</h1>
      <SCInnerWrapper>
        <SCContentWrapper>
          <a
            href="https://discordapp.com/users/8655"
            target="_blank"
            rel="noreferrer"
            title="Discord"
          >
            <img src="/images/discord.svg" alt="Discord" />
          </a>
          <a
            href="mailto:sean@complexlabs.co"
            target="_blank"
            rel="noreferrer"
            title="Gmail"
          >
            <img src="/images/gmail.svg" alt="Gmail" />
          </a>
          <a
            href="https://github.com/Sean-Tisdale"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <img
              style={{ backgroundColor: "#ffffff" }}
              src="/images/github.png"
              alt="Github"
            />
          </a>
        </SCContentWrapper>
        <form name="contact" onSubmit={() => handleSumbit()}>
          <label>
            Name
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={e => {
                setUserName(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={e => {
                setUserEmail(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Message
            <textarea
              placeholder="Message"
              value={userMessage}
              onChange={e => {
                setUserMessage(e.target.value);
              }}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </SCInnerWrapper>
    </SCContactPageWrapper>
  );
};

export default ContactPage;
