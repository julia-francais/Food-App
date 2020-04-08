import React from "react";

const Form = (props) => (
  <form onSubmit={props.getRecipe}>
    <div className="form-group col-7 mx-auto">
      <input
        type="text"
        className="form-control"
        name="recipeName"
        placeholder="Recipe Search"
      />
    </div>

    <div className="form-group">
      <label htmlFor="diet" className="mr-1">
        {" "}
        Diet type{" "}
      </label>

      <select id="diet">
        <option value="balanced">balanced</option>
        <option value="low-carb">low-carb</option>
        <option value="low-fat">low-fat</option>
        <option value="high protein">high protein</option>
        <option value="vegan">vegan</option>
        <option value="vegetarian">vegetarian</option>
        <option value="sugar-conscious">sugar-conscious</option>
        <option value="peanut-free">peanut-free</option>
        <option value="tree-nut-free">tree-nut-free</option>
        <option value="alcohol-free">alcohol-free</option>
      </select>

      {/* <div className="form-check">
        <input
          type="radio"
          id="balanced"
          name="diet"
          value="balanced"
          className="form-check-input"
        />
        <label htmlFor="balanced" className="form-check-label">
          Balanced
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          name="diet"
          id="low-carb"
          className="form-check-input"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="low-carb">
          Low-carb
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="low-fat"
          name="diet"
          value="low-fat"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="low-fat">
          Low-fat
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="vegan"
          name="diet"
          value="vegan"
          className="form-check-input"
        />
        <label htmlFor="vegan" className="form-check-label">
          Vegan
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="vegetarian"
          name="diet"
          value="vegetarian"
          className="form-check-input"
        />
        <label htmlFor="vegetarian" className="form-check-label">
          Vegetarian
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="sugar-conscious"
          name="diet"
          value="sugar-conscious"
          className="form-check-input"
        />
        <label htmlFor="sugar-conscious" className="form-check-label">
          sugar-conscious
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="peanut-free"
          name="diet"
          value="peanut-free"
          className="form-check-input"
        />
        <label htmlFor="peanut-free" className="form-check-label">
          peanut-free
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="high protein"
          name="diet"
          value="high protein"
          className="form-check-input"
        />
        <label htmlFor="high protein" className="form-check-label">
          High protein
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="tree-nut-free"
          name="diet"
          value="tree-nut-free"
          className="form-check-input"
        />
        <label htmlFor="tree-nut-free" className="form-check-label">
          Tree-nut-free
        </label>
      </div>
      <br />

      <div className="form-check">
        <input
          type="radio"
          id="alcohol-free"
          name="diet"
          value="alcohol-free"
          className="form-check-input"
        />
        <label htmlFor="alcohol-free" className="form-check-label">
          Alcohol-free
        </label>
      </div> */}
      <br />
    </div>

    <button>Search</button>
  </form>
);

export default Form;
