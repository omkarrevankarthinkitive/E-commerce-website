import React, { useEffect, useState } from "react";
import axios from "axios";
// importing navbar
import Navbar from "../components/Navbar";

//impoting Header
import Header from "../components/Header";

// importing products

import Products from "../components/Products";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((item) => {
      setData(item.data.products);
    });
  }, []);

  console.log(data);
  return (
    <div className="homeParent">
      <Navbar />
      <Header />
      <Products data={data} setData={setData} />
    </div>
  );
}

export default Home;
