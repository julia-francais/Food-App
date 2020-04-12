import React from "react";

import Table from "react-bootstrap/Table";

const NutritionTable = ({ recipe }) => {
  let nutrientsArray = Object.entries(recipe.totalNutrients);
  return (
    <Table striped bordered hover responsive>
      <tbody>
        {nutrientsArray.map((nutrient, index) => {
          return (
            <tr key={index}>
              <td>{nutrient[1].label}</td>
              <td style={{ width: "200px" }}>
                {Math.round(nutrient[1].quantity)} {nutrient[1].unit}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default NutritionTable;
