import { CVTemplate } from "@/components/CVTemplate";
import { CVEditProvider } from "@/contexts/CVEditContext";
import { waldemarWanatCV } from "@/data/cvData";
import { waldemarWanatCVVersions } from "@/data/cvVersions";

const WaldemarWanatCV = () => {
  return (
    <CVEditProvider
      initialData={waldemarWanatCV}
      versions={waldemarWanatCVVersions}
      selectedVersionId="default"
    >
      <CVTemplate />
    </CVEditProvider>
  );
};

export default WaldemarWanatCV;
