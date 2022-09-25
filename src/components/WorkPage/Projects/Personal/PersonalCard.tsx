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

export function PersonalCard({
  title,
  imageSrc,
  iframeSrc,
  technology,
  description,
}: IWorkPageProps) {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <SCCardWrapper key={title}>
      <img alt={title} src={imageSrc} onClick={() => setDisplay(true)} />
      <SCTitle onClick={() => setDisplay(true)}>{title}</SCTitle>
      <SCModal display={display} key={title}>
        <SCloseIcon onClick={() => setDisplay(false)}>
          <RiCloseLine color="rgb(240, 240, 240)" fontSize={38} />
        </SCloseIcon>
        <SCInnerModal>
          <iframe allowFullScreen={true} src={iframeSrc} title={title} />
          <div>
            <span>
              <h3>Technology</h3>
              <p>{technology}</p>
            </span>
            <span>
              <h3>Description</h3>
              <p>{description}</p>
            </span>
          </div>
        </SCInnerModal>
      </SCModal>
    </SCCardWrapper>
  );
}
