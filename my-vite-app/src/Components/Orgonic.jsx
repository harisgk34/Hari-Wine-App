import React from "react";

const Orgonic = () => {
  return (
    <div className="flex">
      <div>
        <img src="./Images/Organic.webp" alt="Organic" className=" w-2/3" />
        <h1>Zero Pesticides</h1>
      </div>
      <div className="w-1/3">
        <h1>Good and committed wines!</h1>
        <small>
          Our organic wines are designed hand in hand with Oé winegrowers who
          are aware of their role and impact, certified in organic farming. Our
          mission is to transform agriculture, consumption and business in the
          service of Good while offering organic, vegan and zero pesticide
          wines.
        </small>

        <label for="departmentSelect">
          <select id="departmentSelect" name="department">
            <option value="head">The Oé winegrowers </option>
            <option value="csc">
              With the team, we work hand in hand with winegrowers present
              throughout France to offer you the best of organic wine. It is
              with Marie-Paule, Corinne, Claire & Stéphane, Brice, Valérie &
              Alexi, Denis, Emmanuel, François, Pascal & Nico, Mickaël &
              Stéphane that we develop these delicious vintages that we can't
              wait to make you discover.
            </option>
          </select>{" "}
        </label>
      </div>
    </div>
  );
};

export default Orgonic;
