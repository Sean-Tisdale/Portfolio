import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { IWorkPageProps, PersonalWork } from "../constants";
import {
  SCCardWrapper,
  SCTitle,
  SCModal,
  SCloseIcon,
  SCInnerModal,
} from "./Projects.styles";

export function PersonalProjects() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      {PersonalWork?.map((data: IWorkPageProps) => (
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
              <iframe
                allowFullScreen={true}
                src={data?.iframeSrc}
                title={data?.title}
              />
              <div>
                <span>
                  <h3>Technology</h3>
                  <p>{data?.technology}</p>
                </span>
                <span>
                  <h3>Description</h3>
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
