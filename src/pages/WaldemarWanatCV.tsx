import { CVTemplate } from "@/components/CVTemplate";
import { CVEditProvider } from "@/contexts/CVEditContext";
import { waldemarWanatCV } from "@/data/cvData";

const WaldemarWanatCV = () => {
  return (
    <CVEditProvider initialData={waldemarWanatCV}>
      <CVTemplate />
    </CVEditProvider>
  );
};

export default WaldemarWanatCV;
