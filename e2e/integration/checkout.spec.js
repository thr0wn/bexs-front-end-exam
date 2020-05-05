const host = "http://localhost:9000";

describe("Checkout", () => {
  before(() => {
    cy.visit(host);
  });

  const getFormItemByIndex = (index) => cy.get(".ant-form-item").eq(index);

  describe("card numner", () => {
    it("shoud not accept invalid card number", () => {
      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");

      const input = getFormItemByIndex(0).get("input").eq(0);
      input.type("4539753818622257");

      getFormItemByIndex(0).should("have.class", "ant-form-item-has-error");
    });

    it("shoud accept a valid card number", () => {
      const input = getFormItemByIndex(0).get("input").eq(0);
      input.clear().type("4539753818622256").blur();

      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");
    });

    it("shoud accept Mastercard", () => {
      const input = getFormItemByIndex(0).get("input").eq(0);
      input.clear().type("5593170024106554").blur();

      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");
    });
    it("shoud accept American Express", () => {
      const input = getFormItemByIndex(0).get("input").eq(0);
      input.clear().type("377905976899133").blur();

      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");
    });
    it("shoud accept Diners Club", () => {
      const input = getFormItemByIndex(0).get("input").eq(0);
      input.clear().type("36945797839499").blur();

      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");
    });
    it("shoud accept Maestro", () => {
      const input = getFormItemByIndex(0).get("input").eq(0);
      input.clear().type("6762835572248940").blur();

      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");
    });
    it("shoud accept Visa Electron", () => {
      const input = getFormItemByIndex(0).get("input").eq(0);
      input.clear().type("4026153126950012").blur();

      getFormItemByIndex(0).should("not.have.class", "ant-form-item-has-error");
    });
  });

  describe("name", () => {
    it("shoud not accept a single word", () => {
      getFormItemByIndex(1).should("not.have.class", "ant-form-item-has-error");

      const input = getFormItemByIndex(1).get("input").eq(1);
      input.type("Foo");

      getFormItemByIndex(1).should("have.class", "ant-form-item-has-error");
    });

    it("shoud accept a full name", () => {
      const input = getFormItemByIndex(1).get("input").eq(1);
      input.clear().type("Foo Bar").blur();

      getFormItemByIndex(1).should("not.have.class", "ant-form-item-has-error");
    });
  });

  describe("expiry", () => {
    it("shoud not accept invalid expiry date", () => {
      getFormItemByIndex(2).should("not.have.class", "ant-form-item-has-error");

      const input = getFormItemByIndex(2).get("input").eq(2);
      input.type("1/1");

      getFormItemByIndex(2).should("have.class", "ant-form-item-has-error");
    });

    it("shoud accept valid expiry date", () => {
      const input = getFormItemByIndex(2).get("input").eq(2);
      input.clear().type("04/25").blur();

      getFormItemByIndex(2).should("not.have.class", "ant-form-item-has-error");
    });
  });

  describe("cvv", () => {
    it("shoud not accept cvv with less than 3 digits", () => {
      getFormItemByIndex(3).should("not.have.class", "ant-form-item-has-error");

      const input = getFormItemByIndex(3).get("input").eq(3);
      input.type("1");

      getFormItemByIndex(3).should("have.class", "ant-form-item-has-error");
    });

    it("shoud accept valid cvv", () => {
      const input = getFormItemByIndex(3).get("input").eq(3);
      input.clear().type("123").blur();

      getFormItemByIndex(3).should("not.have.class", "ant-form-item-has-error");
    });
  });

  describe("payment method", () => {
    it("shoud select a payment method", () => {
      getFormItemByIndex(4).click();
      getFormItemByIndex(4).get(".ant-select-item").eq(3).click();

      getFormItemByIndex(4).should("not.have.class", "ant-form-item-has-error");
    });
  });
});
