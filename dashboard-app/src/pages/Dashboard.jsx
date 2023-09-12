import React from "react";
import "../index.css";
import contents from "./content";
import Product from "./Product";

function Dashboard() {
  return (
    <div className="App">
      {contents.map((contents) => (
        <Product
          key={contents.id}
          //   image={contents.image}
          email={contents.email}
          name={contents.name}
          phone={contents.phone}
          //   totalSales={contents.totalSales}
          website={contents.website}
          //   rating={contents.rating}
        />
      ))}
    </div>
  );
}

export default Dashboard;
