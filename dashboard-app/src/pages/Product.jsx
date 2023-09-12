import React from "react";
import {
  //   FaShoppingCart,
  //   FaRegBookmark,
  FaStar,
  //   FaFireAlt,
} from "react-icons/fa";

const Product = (props) => {
  console.log(props, "props");
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        {/* <img src={props.image} alt="product-img" className="productImage"></img>

        <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} />
        <FaFireAlt className={"productCard__fastSelling"} /> */}

        <div className="productCard__content">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack__1">
            <div className="productSales">✉ {props.email}</div>
            <div className="productSales">☏ {props.phone} </div>
          </div>
          <div className="displayStack__2">
            <div className="productRating">
              {[...Array(props.rating)].map((index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
            <div className="productTime"> {props.website} </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="card-shape">
    //   <div class="card cards card-2 text-center">
    //     <div class="card-body">
    //       <h1 className="card-id">{props.id}</h1>
    //       <h5 class="card-title">{props.title}</h5>
    //       <p class="card-text">
    //         With supporting text below as a natural lead-in to additional
    //         content.
    //       </p>
    //       <h2 className="card-foot">{props.completed}</h2>
    //       <a href="#" class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;
