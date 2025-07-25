import Axios from "axios";

export async function ConsumoApi(cep: string) {
  const urlApi = `https://viacep.com.br/ws/${cep}/json/`;
  const requisicaoApi = await Axios.get(urlApi);

  if (requisicaoApi.data.erro) {
    return {
      ...requisicaoApi.data,
      uf: "xxxx - xxxx",
      ddd: "xxxx - xxxx",
      localidade: "xxxx - xxxx",
      bairro: "xxxx - xxxx",
      logradouro: "xxxx - xxxx",
      cep: "xxxx - xxxx",
      regiao: "xxxx - xxxx",
    };
  }
  return {
    uf: requisicaoApi.data.uf || "N/A",
    ddd: requisicaoApi.data.ddd || "N/A",
    localidade: requisicaoApi.data.localidade || "N/A",
    bairro: requisicaoApi.data.bairro || "N/A",
    logradouro: requisicaoApi.data.logradouro || "N/A",
    cep: requisicaoApi.data.cep || "N/A",
    regiao: requisicaoApi.data.bairro || "N/A",
  };
}
