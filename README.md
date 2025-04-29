# **Solucx - Testes Automatizados**

Este repositório contém testes automatizados utilizando **Cypress** para validar funcionalidades. Os testes são executados em um pipeline de CI/CD, garantindo a qualidade e o bom funcionamento do sistema.

## 🚀 **Como Executar os Testes**

### **1️⃣ Pré-requisitos**
Antes de rodar os testes, verifique se você tem as ferramentas necessárias instaladas:

- **Node.js**: versão 16 ou superior.
- **npm** (gerenciador de pacotes) ou **yarn**.

Caso não tenha o **Node.js** instalado, acesse o [site oficial](https://nodejs.org) e siga as instruções para instalação.

### **2️⃣ Instalação**

1. **Clone o repositório**:
   
   No terminal, clone o repositório para sua máquina local com o seguinte comando:
   ```sh
   git clone https://github.com/YanMoraesY/solucx.git
    cd solucx
    npm install 
   ``` 

3️⃣ Executando os Testes
▶️ Rodar testes em modo headless (sem interface gráfica):
  ```sh
    npm run cy:run
  ````

🖥️ Abrir o Cypress em modo interativo:
Se você preferir visualizar os testes sendo executados em um ambiente gráfico, use o modo interativo:
  ```sh
    npm run cy:open
  ```
Isso abrirá o Cypress UI e você poderá escolher qual teste executar manualmente.

4️⃣ Pipeline e Dashboard
Os testes estão configurados para rodar automaticamente em um pipeline de CI/CD. A execução dos testes e o histórico de resultados podem ser visualizados no [Cypress Dashboard](https://cloud.cypress.io/projects/tm2r8v/branches/main/overview).

🔗 Acessar o Dashboard Cypress
5️⃣ Estrutura de Testes
Os testes estão organizados dentro da pasta cypress/integration. Cada cenário de teste foi projetado para garantir a funcionalidade e qualidade do sistema Solucx.

6️⃣ Salvando Artefatos
Em caso de falha nos testes, as capturas de tela e vídeos serão automaticamente salvos para que você possa inspecionar e depurar o que aconteceu.

As capturas de tela ficam em cypress/screenshots.
Os vídeos podem ser encontrados em cypress/videos.
Esses artefatos serão armazenados no pipeline para análise posterior.

📌 Contato
Caso tenha dúvidas ou precise de suporte, entre em contato com o responsável pelo repositório ou abra uma issue diretamente no GitHub.


