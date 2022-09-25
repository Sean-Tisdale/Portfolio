import { ComplexData } from "../../constants";
import { ProfessionalCard } from "./ProfessionalCard";

export function ProfessionalProjects() {
  return (
    <>
      <ProfessionalCard
        imageSrc={ComplexData?.imageSrc}
        title={ComplexData?.title}
        technology={ComplexData?.technology}
        description={ComplexData?.description}
        innerImageSrc={ComplexData?.innerImageSrc}
        href={ComplexData?.href}
        role={ComplexData?.role}
      />
    </>
  );
}
