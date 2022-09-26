import { NftPlatformData, OpeanseaCloneData } from "../../constants";
import { ProfessionalCard } from "../Professional/ProfessionalCard";

export function PersonalProjects() {
  return (
    <>
      <ProfessionalCard
        imageSrc={OpeanseaCloneData?.imageSrc}
        title={OpeanseaCloneData?.title}
        technology={OpeanseaCloneData?.technology}
        description={OpeanseaCloneData?.description}
        innerImageSrc={OpeanseaCloneData?.innerImageSrc}
        href={OpeanseaCloneData?.href}
      />
      <ProfessionalCard
        imageSrc={NftPlatformData?.imageSrc}
        title={NftPlatformData?.title}
        technology={NftPlatformData?.technology}
        description={NftPlatformData?.description}
        innerImageSrc={NftPlatformData?.innerImageSrc}
        href={NftPlatformData?.href}
      />
    </>
  );
}
