import {
  SCButton,
  SCContactPageWrapper,
  SCContentWrapper,
  SCInnerWrapper,
} from "./ContactPage.styles";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    emailjs.send(
      "contact_service",
      "contact_form",
      data,
      process.env.REACT_APP_EMAILJS_KEY as string
    );
    alert("Message Sent!");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
          </label>
          <label>
            Message
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
            />
          </label>
          <SCButton type="submit" />
        </form>
      </SCInnerWrapper>
    </SCContactPageWrapper>
  );
};

export default ContactPage;
