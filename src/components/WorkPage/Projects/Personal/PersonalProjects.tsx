import { NftPlatformData, OpeanseaCloneData } from "../../constants";
import { PersonalCard } from "./PersonalCard";

export function PersonalProjects() {
  return (
    <>
      <PersonalCard
        imageSrc={OpeanseaCloneData?.imageSrc}
        title={OpeanseaCloneData?.title}
        technology={OpeanseaCloneData?.technology}
        description={OpeanseaCloneData?.description}
        iframeSrc={OpeanseaCloneData?.iframeSrc}
      />
      <PersonalCard
        imageSrc={NftPlatformData?.imageSrc}
        title={NftPlatformData?.title}
        technology={NftPlatformData?.technology}
        description={NftPlatformData?.description}
        iframeSrc={NftPlatformData?.iframeSrc}
      />
    </>
  );
}
