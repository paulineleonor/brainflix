const convertDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export default convertDate;
