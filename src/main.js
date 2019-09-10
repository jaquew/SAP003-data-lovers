console.log(Object.entries(WORLDBANK.BRA.indicators))
if (WORLDBANK.PER.indicators[0].indicatorCode === "SL.TLF.PART.FE.ZS") {
    console.log(WORLDBANK.PER.indicators[0].data[2003])
}