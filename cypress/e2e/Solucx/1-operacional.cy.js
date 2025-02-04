import acessos from "../../fixtures/acessos.json";
import massa from "../../fixtures/massaTeste.json";

describe("Deve realizar a validacao na Tela de Extrato", () => {
  it("Acessar o site solucx", () => {
    cy.visit("https://app.preview.solucx.com.br/modelo/auth/login");
  });

  it("Inserir as credenciais de acesso", () => {
    cy.wait(5000);
    cy.get(
      ":nth-child(1) > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__prefix > .el-input__prefix-inner > .fal"
    )
      .click()
      .type("hssaine664@uorak.com");
    cy.get(
      ":nth-child(2) > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__prefix > .el-input__prefix-inner"
    )
      .click()
      .type("senhaSolucx");
    cy.get("#formLogin > .el-button--primary").click();
  });

  it("Validar que o usuario esteja na tela de inicio", () => {
    cy.get("#titleDiv > span").should("be.visible");
    cy.get('#el-collapse-head-43 > .el-text > span').should("be.visible")
    // cy.contains("FILTERS").should("be.visible");
  });

  it('Deve acessar a tela operacional "Resumo"', () => {
    cy.wait(5000)
    cy.get("#automation-menu-resume > .el-sub-menu__title").click();
    cy.get('#automation-menu-resume > .el-sub-menu__title > :nth-child(1)')
    cy.contains("Operational").click({ force: true });
    cy.get(".el-text").should("be.visible");
  });

  it("Deve tentar registar uma compra sem preencher nenhuma informacao - Teste negativo", () => {
    cy.get("#submitButton").click();
    cy.contains("Fill this field").should("be.visible");
  });

  it("Deve preencher os dados para registrar a compra", () => {
    cy.get("#automation-inputUserData").type(massa.email);
    cy.get("#automation-selectedValue").clear().type(massa.valor);
    cy.get(
      ":nth-child(4) > .el-form-item__content > .el-select > .el-select__wrapper"
    ).click();
    cy.get("#automation-selectedJourney").type(massa.jornada);
    cy.get(".el-select-dropdown__item", { timeout: 5000 })
      .contains("solucx-qa")
      .click();
  });

  it("Selecione a Matriz", () => {
    cy.get(
      ":nth-child(5) > .el-form-item__content > .el-select > .el-select__wrapper"
    ).click();
    cy.get("#automation-selectedStore").type(massa.Unidade);
    cy.get(".el-select-dropdown__item")
      .contains("Matriz")
      .click({ force: true });
  });

  it("Selecione um colaborador", () => {
    cy.get(
      ":nth-child(6) > .el-form-item__content > .el-select > .el-select__wrapper"
    ).click();
    cy.get("#automation-selectedEmployer").type(massa.colaborador);
    cy.get(".el-select-dropdown__item")
      .contains(/Adejane\s+Moreira/)
      .click();
    cy.get("#submitButton").click();
  });

  it("Acessar tela de Extrato", () => {
    cy.get(".justify-content-center > .d-flex").click({ force: true });
  });

  it("Deve acessar campo de resposta com o email ", () => {
    cy.get("#channels > :nth-child(2) > .el-button").click({ force: true });
  });

  it("Deve acessara resposta desejada", () => {
    cy.get("#transaction-0 > .overflow-hidden").click();
  });

  it("Deve validar algumas informacoes ", () => {
    cy.get('#AssigneeAvatar').click()
    cy.wait(5000);
    cy.contains("Yan Teste").should("be.visible");
    cy.get('#formgroup-rating-items > :nth-child(2) > .d-flex > :nth-child(1)').should("be.visible")
    cy.get('#formgroup-rating-items > :nth-child(2) > .d-flex > :nth-child(2)').should("be.visible")
    cy.get(':nth-child(2) > .d-flex > :nth-child(3)').should("be.visible")
    cy.get('.d-flex > :nth-child(4)').should("be.visible")
    cy.get(".align-items-start").contains("10").should("be.visible");
  });
});
