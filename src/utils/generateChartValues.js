export const generateChartValues = (arrayofObjects) => {
  let chartValues = [];

  const NUT_TYPES = {
    Carbs: "#28a745",
    Protein: "#e86dd1",
    Fat: "#fdc109",
  };

  arrayofObjects.map((object) => {
    const result = {
      values: [object.total],
      text: object.label,
      backgroundColor: NUT_TYPES[object.label],
    };
    chartValues.push(result);
  });
  return chartValues;
};
