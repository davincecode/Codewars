const updateLight = (current) =>
  current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : current === "green"
    ? "yellow"
    : null;

//refactor
const updateLight = (current) => {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
};
