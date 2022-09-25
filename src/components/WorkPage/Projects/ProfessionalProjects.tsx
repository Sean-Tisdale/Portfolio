import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { IWorkPageProps, ProfessionalWork } from "../constants";
import {
  SCCardWrapper,
  SCTitle,
  SCModal,
  SCloseIcon,
  SCInnerModal,
} from "./Projects.styles";

export function ProfessionalProjects() {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      {ProfessionalWork?.map((data: IWorkPageProps) => (
        <SCCardWrapper>
          <img
            alt={data?.title}
            src={data?.imageSrc}
            onClick={() => setDisplay(true)}
          />
          <SCTitle onClick={() => setDisplay(true)}>{data?.title}</SCTitle>

          <SCModal display={display}>
            <SCloseIcon onClick={() => setDisplay(false)}>
              <RiCloseLine color="rgb(240, 240, 240)" fontSize={38} />
            </SCloseIcon>
            <SCInnerModal>
              <a
                href={data?.href}
                target="_blank"
                rel="noreferrer"
                title={data?.title}
              >
                <img src={data?.innerImageSrc} alt={data?.title} />
              </a>
              <div>
                <span>
                  <h3>Technology</h3>
                  <p>{data?.technology}</p>
                </span>
                <span>
                  <h3>Description</h3>
                  <h2>
                    Role: <mark>{data?.role}</mark>
                  </h2>
                  <p>{data?.description}</p>
                </span>
              </div>
            </SCInnerModal>
          </SCModal>
        </SCCardWrapper>
      ))}
    </>
  );
}
