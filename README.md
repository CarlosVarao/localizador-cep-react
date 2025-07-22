# Localizador de CEP React

Aplicação React para buscar informações de endereço a partir do CEP utilizando a API pública ViaCEP.

Este projeto permite que você digite um CEP no formato `00000-000` e, ao clicar em buscar, ele consulta a API ViaCEP para retornar dados como UF, DDD, localidade, bairro, logradouro e o próprio CEP. Ele também oferece feedback visual para erros ou sucesso na busca e um botão para limpar os dados e o campo de entrada. A interface é responsiva para dispositivos móveis.

A aplicação foi desenvolvida utilizando React, com hooks como `useState`, Axios para requisições HTTP, e CSS puro para a estilização.

---

Para rodar o projeto localmente, você precisa ter o Node.js e o npm instalados na sua máquina. Caso não tenha, acesse [nodejs.org](https://nodejs.org) para instalar.

Depois, siga os passos:

1. Clone este repositório na sua máquina, usando o comando no terminal:
   git clone https://github.com/seu-usuario/localizador-cep-react.git

2. Entre na pasta do projeto:
   cd localizador-cep-react

3. Instale as dependências necessárias com o npm ou yarn:
   npm install

4. Inicie o servidor de desenvolvimento para rodar o app localmente:
   npm run dev

Se quiser acessar a aplicação via outros dispositivos da mesma rede, como seu celular ou tablet, é recomendado iniciar o servidor expondo o host da máquina local. Para isso, use:

npm run dev -- --host

Ou ajuste sua configuração para que o servidor fique acessível via IP local.

5. Agora, abra seu navegador e acesse:
   http://localhost: sua porta

Ou, se estiver acessando de outro dispositivo na mesma rede, substitua `localhost` pelo IP da sua máquina.

Se quiser entrar em contato comigo, use:

Email: carlosvarao.frontend@hotmail.com  
LinkedIn: https://www.linkedin.com/in/carlosvaraofrontend  
GitHub: https://github.com/CarlosVarao

---

Feito com ❤️ usando React e muita dedicação!
