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
      </SCInnerWrapper>
    </SCContactPageWrapper>
  );
};

export default ContactPage;
