import { CVTemplate } from "@/components/CVTemplate";
import { CVEditProvider } from "@/contexts/CVEditContext";
import { alanUrbanCV } from "@/data/cvData";

const AlanUrbanCV = () => {
  return (
    <CVEditProvider initialData={alanUrbanCV}>
      <CVTemplate />
    </CVEditProvider>
  );
};

export default AlanUrbanCV;
