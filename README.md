# 🚀 Localizador de CEP React

Aplicação React para buscar informações de endereço a partir do CEP utilizando a API pública ViaCEP.

Este projeto permite que você digite um CEP no formato `00000-000` e, ao clicar em buscar, ele consulta a API ViaCEP para retornar dados como UF, DDD, localidade, bairro, logradouro e o próprio CEP. Ele também oferece feedback visual para erros ou sucesso na busca e um botão para limpar os dados e o campo de entrada. A interface é responsiva para dispositivos móveis.

A aplicação foi desenvolvida utilizando React, com hooks como `useState`, Axios para requisições HTTP, e CSS puro para a estilização.

---

## ⚙️ Como Rodar Localmente

Para rodar o projeto na sua máquina, você precisa ter o Node.js e o npm instalados. Se ainda não tiver, acesse [nodejs.org](https://nodejs.org) para instalar.

Depois, siga estes passos:

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/localizador-cep-react.git
   ```

2. **Entre na pasta do projeto:**

   ```bash
   cd localizador-cep-react
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

> 💡 *Dica:* Para acessar a aplicação via outros dispositivos na mesma rede (celular, tablet), rode o servidor expondo o host:  
>
> ```bash
> npm run dev -- --host
> ```  
> Ou configure sua ferramenta para permitir acesso via IP local.

5. **Abra seu navegador e acesse:**

```
http://localhost:3000
```

Ou, se estiver acessando de outro dispositivo na mesma rede, substitua `localhost` pelo IP da sua máquina.

---

## 📫 Contato

📧 Email: carlosvarao.frontend@hotmail.com  
🔗 LinkedIn: [linkedin.com/in/carlosvaraofrontend](https://www.linkedin.com/in/carlosvaraofrontend)  
🐙 GitHub: [github.com/CarlosVarao](https://github.com/CarlosVarao)

---

❤️ Feito com muito amor, React e dedicação!
