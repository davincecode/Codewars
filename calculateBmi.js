const bmi = (w, h) => {
  x = w / Math.pow(h, 2);

  y =
    x <= 18.5
      ? "Underweight"
      : x <= 25
      ? "Normal"
      : x <= 30
      ? "Overweight"
      : "Obese";

  return y;
};
