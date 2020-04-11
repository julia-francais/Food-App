import React from "react";

import Table from "react-bootstrap/Table";

const NutritionTable = ({ recipe }) => {
  let nutrientsArray = Object.entries(recipe.totalNutrients);
  console.log("nut", nutrientsArray);
  return (
    <Table striped bordered hover responsive>
      <tbody>
        {nutrientsArray.map((nutrient) => {
          console.log(nutrient);
          return (
            <tr>
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
