interface CardData {
  apr_percentage: number;
  balance_subject_to_apr: number;
}
export default (
  inputMoney: string,
  futureDateData: Array<CardData>
): number | null | typeof Infinity => {
  if (inputMoney) {
    let cNperDay = 0;
    const inputMoneyNumber = parseFloat(inputMoney);
    /**
     * D72*(1+C72/360)^G71
     */
    for (let index = 0; index < futureDateData.length; index++) {
      const { apr_percentage, balance_subject_to_apr } = futureDateData[index];

      /**
       * =D72*(1+C72/360)^G71
       */
      const apr = apr_percentage / 100;
      const daylyAprPercentage = 1 + apr / 360;
      let balance_adj =
        balance_subject_to_apr * Math.pow(daylyAprPercentage, cNperDay);

      /**
       * =IF(C72=0,D72/($C$59/7),-LN(1-E72*C72/(360*$C$59/7))/LN(1+C72/360))
       */
      if (apr === 0) {
        cNperDay += inputMoneyNumber
          ? balance_subject_to_apr / (inputMoneyNumber / 30)
          : Infinity;
      } else {
        let rightSideSub = inputMoneyNumber
          ? (balance_adj * apr) / ((360 * inputMoneyNumber) / 30)
          : 1;
        if (rightSideSub >= 1) {
          return Infinity;
        }
        let interiorNum = 1 - rightSideSub;
        let cNperDayNum = -Math.log(interiorNum);

        let cNperDayDen = Math.log(daylyAprPercentage);
        cNperDay += cNperDayNum / cNperDayDen;
      }
    }

    return cNperDay;
  }

  return null;
};
