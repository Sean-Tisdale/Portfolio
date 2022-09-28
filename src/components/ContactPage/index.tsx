import {
  SCContactPageWrapper,
  SCContentWrapper,
  SCInnerWrapper,
  StyledToastContainer,
} from "./ContactPage.styles";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    emailjs.send("contact_service", "contact_form", data, "ay6qfMNEnmRZI_3xe");
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      toast("Your message has been sent!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        closeButton: false,
      });
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <SCContactPageWrapper id="Contact">
        <h1>Contact Me</h1>
        <SCInnerWrapper>
          <SCContentWrapper>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >
              <img src="/images/contact/resume.svg" alt="Resume" />
            </a>
            <a
              href="https://www.linkedin.com/in/sean-tisdale-72111b241/"
              target="_blank"
              rel="noreferrer"
              title="Linkedin"
            >
              <img src="/images/contact/linkedin.svg" alt="Linkedin" />
            </a>
            <a
              href="https://discordapp.com/users/8655"
              target="_blank"
              rel="noreferrer"
              title="Discord"
            >
              <img src="/images/contact/discord.svg" alt="Discord" />
            </a>
            <a
              href="https://github.com/Sean-Tisdale"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <img src="/images/contact/github.png" alt="Github" />
            </a>
          </SCContentWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Name
              <input
                type="text"
                placeholder="Name"
                maxLength={60}
                {...register("name", { required: true })}
              />
              {errors.name && <span>Please enter your name</span>}
            </label>
            <label>
              Email
              <input
                type="email"
                maxLength={60}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <span>Please enter your email</span>}
            </label>
            <label>
              Message
              <textarea
                placeholder="Message"
                maxLength={500}
                {...register("message", { required: true })}
              />
              {errors.message && <span>Please enter a brief message</span>}
            </label>
            <button type="submit">Submit</button>
          </form>
        </SCInnerWrapper>
      </SCContactPageWrapper>
      <StyledToastContainer limit={1} />
    </>
  );
};

export default ContactPage;
