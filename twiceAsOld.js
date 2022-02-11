const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  const sonAge = sonYearsOld * 2;
  const yrs = dadYearsOld - sonAge;

  return Math.abs(yrs);
};
