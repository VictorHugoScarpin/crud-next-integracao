# 🚀 Integração Frontend e Backend - CRUD

Atividade prática desenvolvida para estabelecer a comunicação entre Frontend e Backend utilizando o padrão de API REST. O sistema permite a manipulação de dados através das operações de CRUD (Create, Read, Update, Delete).

O projeto consome a API fornecida pelo professor, disponível no repositório **[fundamentos-nest](https://github.com/weligtonferreira/fundamentos-nest)**, construída em **NestJS**, através de um Frontend desenvolvido em **Next.js**.

## 🛠️ Tecnologias e Bibliotecas Utilizadas

* **Frontend:** Next.js (React)
* **Estilização:** Tailwind CSS
* **Requisições HTTP:** Axios
* **Gerenciamento de Formulários:** React Hook Form (`useForm`)
* **Gerenciamento de Estado Local:** React Hooks (`useState`, `useEffect`)
* **Ícones:** React Icons
* **Backend (API Externa):** NestJS (Repositório do Professor Weligton Ferreira)

## 👥 Equipe e Divisão de Tarefas

Conforme os requisitos da atividade, as tarefas foram divididas individualmente entre os membros da equipe para avaliação dos commits no repositório:

* **Victor Hugo Scarpin Xavier:** Setup inicial do projeto Next.js, estruturação do Layout Base (Header, Sidebar, Footer), configuração de rotas e TailwindCSS.
* **Igor Almeida de Oliveira:** Tela de Listagem (READ) - Consumo do endpoint `GET` com Axios e renderização dos dados na interface.
* **Raryson Rennan Pedrosa da Silva:** Tela de Cadastro (CREATE) - Criação do formulário utilizando `useForm` e envio da requisição `POST`.
* **Denne William Rodrigues Ganda:** Tela de Edição (UPDATE) - Busca dos dados por ID e envio da requisição `PUT`/`PATCH` para atualização.
* **Valdemarques:** Lógica de Exclusão (DELETE) e Feedbacks visuais - Implementação da requisição `DELETE`, modais de confirmação e alertas de sucesso/erro globais.

## ⚙️ Como executar o projeto localmente

1. Clone este repositório:
```bash
git clone [https://github.com/SEU-USUARIO/crud-next-integracao.git](https://github.com/SEU-USUARIO/crud-next-integracao.git)
```

2. Acesse a pasta do projeto:
```bash
cd crud-next-integracao
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

---
*Desenvolvido para a atividade prática de Integração de Sistemas.*