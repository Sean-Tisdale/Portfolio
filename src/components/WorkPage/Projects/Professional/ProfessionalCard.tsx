import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { IWorkPageProps } from "../../constants";
import {
  SCCardWrapper,
  SCTitle,
  SCModal,
  SCloseIcon,
  SCInnerModal,
} from "../Projects.styles";

export function ProfessionalCard({
  title,
  imageSrc,
  technology,
  description,
  innerImageSrc,
  href,
  role,
}: IWorkPageProps) {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      <SCCardWrapper key={title}>
        <img alt={title} src={imageSrc} onClick={() => setDisplay(true)} />
        <SCTitle onClick={() => setDisplay(true)}>{title}</SCTitle>
        <SCModal display={display.toString()} key={title}>
          <SCloseIcon onClick={() => setDisplay(false)}>
            <RiCloseLine color="rgb(240, 240, 240)" fontSize={38} />
          </SCloseIcon>
          <SCInnerModal>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              title="View on Github"
            >
              <img src={innerImageSrc} alt={title} />
            </a>
            <div>
              <span>
                <h3>Technology</h3>
                <p>{technology}</p>
              </span>
              <span>
                <h3>Description</h3>
                {role ? (
                  <h2>
                    Role: <mark>{role}</mark>
                  </h2>
                ) : null}
                <p>{description}</p>
              </span>
            </div>
          </SCInnerModal>
        </SCModal>
      </SCCardWrapper>
    </>
  );
}
