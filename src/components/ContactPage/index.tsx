import {
  SCContactPageWrapper,
  SCContentWrapper,
  SCInnerWrapper,
} from "./ContactPage.styles";

const ContactPage = () => {
  return (
    <SCContactPageWrapper id="Contact">
      <h1>Contact Me</h1>
      <SCInnerWrapper>
        <SCContentWrapper>
          <a
            href="https://discordapp.com/users/8655"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/discord.svg" alt="Discord" />
          </a>
          <a href="mailto:sean@complexlabs.co" target="_blank" rel="noreferrer">
            <img src="/images/gmail.svg" alt="Gmail" />
          </a>
          <a
            href="https://github.com/Sean-Tisdale"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ backgroundColor: "#ffffff" }}
              src="/images/github.png"
              alt="Github"
            />
          </a>
        </SCContentWrapper>
        <form name="contact" data-netlify="true">
          <label>
            Name
            <input type="text" name="Name" placeholder="Name" />
          </label>
          <label>
            Email
            <input type="email" name="Email" placeholder="Email" />
          </label>
          <label>
            Message
            <input
              type="text"
              name="Message"
              placeholder="Message"
              style={{ paddingBottom: "17vh" }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="Name" />
          <input type="email" name="Email" />
          <input type="text" name="Message" />
        </form>
      </SCInnerWrapper>
    </SCContactPageWrapper>
  );
};

export default ContactPage;
