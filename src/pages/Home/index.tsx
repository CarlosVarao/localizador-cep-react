import { useState } from "react";
import { ConsumoApi } from "../../services/consumoApi"
import "./styles.css";

export default function App() {

  const padraoInfo = {
    uf: "xxxx - xxxx",
    ddd: "xxxx - xxxx",
    localidade: "xxxx - xxxx",
    bairro: "xxxx - xxxx",
    logradouro: "xxxx - xxxx",
    cep: "xxxx - xxxx",
    regiao: "xxxx - xxxx",
  }
  const [dadosCep, setDadosCep] = useState(padraoInfo);
  const [numCep, setNumCep] = useState("");
  const [erroCep, setErroCep] = useState(" ");
  const [erroAnimar, setErroAnimar] = useState(false)

  const limparDados = () => {
    if (numCep === "") {
      setErroAnimar(true)
      setErroCep("Campo já está limpo.");
      setTimeout(() => {
        setErroAnimar(!true)
      }, 2300);
    } else if (numCep.length > 0) {
      setTimeout(() => {
        setErroAnimar(!true)
      }, 240);
    }
    setDadosCep(padraoInfo);
    setNumCep("");
  };

  const buscarDadosApi = async () => {
    const cepLimpo = numCep.replace(/\D/g, "");

    if (!/^\d{8}$/.test(cepLimpo)) {
      setErroAnimar(true)
      setErroCep("Por favor, digite um CEP válido com 8 números.");
      return;
    }

    const resposta = await ConsumoApi(cepLimpo)

    try {

      if (resposta.erro) {
        setErroAnimar(true)
        setErroCep("CEP não encontrado.");
        setDadosCep(resposta)

      } else {
        setErroAnimar(true)
        setErroCep("CEP ENCONTRADO")
        setDadosCep(resposta)
      }
    } catch (error) {
      setErroAnimar(true)
      setErroCep("Erro ao buscar o CEP. Tente novamente.");
      setDadosCep(resposta)
    }
  };

  return (
    <div className="cep-container">
      <h2>Localizador CEP</h2>

      <div className="form-cep">
        <input
          type="text"
          className="input-cep"
          placeholder="Digite o CEP ( apenas números )"
          maxLength={9}
          value={numCep}
          onChange={(e) => {
            const rawValue = e.target.value.replace(/\D/g, "");
            const maskedValue = rawValue.replace(/^(\d{5})(\d)/, "$1-$2");
            setNumCep(maskedValue);
          }}
          aria-label="Campo para digitar CEP"
        />
        <button
          type="button"
          className="botao-buscar"
          onClick={buscarDadosApi}
        >
          Buscar
        </button>
        <button type="button" className="botao-limpar" onClick={limparDados}>
          Limpar
        </button>
      </div>

      {erroCep && <p className={`erro ${erroAnimar ? "erroAnimar" : "resetErroAnimar"}`} role="alert">{erroCep}</p>}

      <div className="resultado-cep" aria-live="polite">
        <p>
          uf: <span>{dadosCep.uf}</span>
        </p>
        <p>
          ddd: <span>{dadosCep.ddd}</span>
        </p>
        <p>
          localidade: <span>{dadosCep.localidade}</span>
        </p>
        <p>
          bairro: <span>{dadosCep.bairro}</span>
        </p>
        <p>
          logradouro: <span>{dadosCep.logradouro}</span>
        </p>
        <p>
          cep: <span>{dadosCep.cep}</span>
        </p>
      </div>
    </div >
  );
}
