import axios from "axios";
import {
  dividirStringParaObjeto,
  extrairConteudoEntreAspas,
} from "../utils/stringFunctions";

export const getProcessingStatus = async () => {
  try {
    const processosIds = localStorage.getItem("processIds");

    let arrayProcessosIds: string[] = [];
    if (processosIds) {
      arrayProcessosIds = extrairConteudoEntreAspas(processosIds);
    }

    if (arrayProcessosIds.length > 0) {
      
      const requests = arrayProcessosIds.map((item) => {
        const { id, name } = dividirStringParaObjeto(item);
        return axios
          .get(`/api/processing/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userId")}`,
            },
          })
          .then((response) => ({ name, data: response.data.processing }));
      });

     
      const results = await Promise.all(requests);

      
      const processStatusMap: { [key: string]: any[] } = {};
      results.forEach((result) => {
        if (!processStatusMap[result.name]) {
          processStatusMap[result.name] = []; 
        }
        processStatusMap[result.name].push(result.data); 
      });

      return processStatusMap;
    } else {
      console.log("Nenhum ID de processo encontrado.");
    }
  } catch (error) {
    console.error("Falha ao buscar status do processo:", error);
  }
};
