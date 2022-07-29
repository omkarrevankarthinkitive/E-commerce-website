import React, { useEffect, useState } from "react";
import "./Products.css";

function Products({ data, setData }) {
  const categories = [...new Set(data.map((item) => item.category))];
  const [category, setCategory] = useState("");
  const filterItem = () => {
    if (category == "") {
      return data;
    }
    const updateData = data.filter((elem) => {
      return elem.category === category;
    });
    return updateData;
  };
  return (
    <div>
      {/* <h1 className="productHeading">Our Product Listings</h1>
      {categories.map((item) => {
        return (
          <span className="productsButton">
            <button className="categoryHere" onClick={() => filterItem(item)}>
              SMARTPHONES
            </button>
          </span>
        );
      })} */}

      {/* {data.map((item) => {
        
        return (
          <>
            <button>{category}</button>
          </>
        );
      })} */}

      <span className="productsButton">
        <button
          className="categoryHere"
          onClick={() => setCategory("smartphones")}
        >
          SMARTPHONES
        </button>
      </span>
      <span className="productsButton">
        <button className="categoryHere" onClick={() => setCategory("laptops")}>
          LAPTOPS
        </button>
      </span>
      <span className="productsButton">
        <button
          className="categoryHere"
          onClick={() => setCategory("fragrances")}
        >
          FRAGRANCES
        </button>
      </span>
      <span className="productsButton">
        <button
          className="categoryHere"
          onClick={() => setCategory("skincare")}
        >
          SKINCARE
        </button>
      </span>

      {filterItem().map((item) => {
        const {
          id,
          title,
          description,
          price,
          discountPercentage,
          rating,
          brand,
          category,
          thumbnail,
          images,
        } = item;
        return (
          <div className="ParentDivProd">
            <div className="wholeConatinerProducts">
              <div className="bothContainer">
                <div className="imgDivProducts">
                  <img src={images[0]} />
                </div>
                <div className="productNameContainer">
                  <h1>{title}</h1>
                  <p className="brandName">{brand}</p>
                  <h4>$ {price}</h4>
                  <p className="ratingName">Rating {rating}</p>
                  <button>BUY</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
