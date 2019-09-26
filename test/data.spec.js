require("../src/data.js");

describe("filterData", () => {
  it("é funcao", () => {
    expect(typeof data.filterData).toBe("function");
  });
  it("é sobre trabalho", () => {
    expect(data.filterData([
      {"indicatorName": "Índice de Capital Humano, femenino (escala de 0 a 1)", "indicatorCode": "HD.HCI.OVRL.FE"},
      {"indicatorName": "Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)", "indicatorCode": "SH.ANM.ALLW.ZS"},
      {"indicatorName": "Fuerza laboral con educación avanzada (% del total)", "indicatorCode": "SL.TLF.ADVN.ZS"}, {"indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", "indicatorCode": "SL.TLF.PART.FE.ZS"}])).toEqual([{"indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", "indicatorCode": "SL.TLF.PART.FE.ZS"}]);
  });
  
});

describe("filterIndicator", () => {
  it("filtra por indicador", () => {
    expect(data.filterIndicator([{"indicatorCode": "SL.TLF.PART.FE.ZS"}, {"indicatorCode": "SL.TLF.INTM.ZS"}, {"indicatorCode": "SL.TLF.INTM.MA.ZS"}], "SL.TLF.INTM.ZS")).toEqual([{"indicatorCode": "SL.TLF.INTM.ZS"}]);
  });
});

describe("orderData", () => {
  it("ordena por dados crescente", () => {
    expect(data.orderData([["2008", 50], ["2009", 75], ["2010", 20]], "menor")).toEqual([["2010", 20], ["2008", 50], ["2009", 75]]);
  });
  it("ordena por data decrescente", () => {
    expect(data.orderData([["2008", 50], ["2009", 75], ["2010", 20]], "anoMaior")).toEqual([["2010", 20], ["2009", 75], ["2008", 50]]);
  });
});

describe("calculaMedia", () => {
  it("calcula a media dos valores", () => {
    expect(data.calculaMedia([90, 26, 46], 3)).toEqual(54);
  });
});