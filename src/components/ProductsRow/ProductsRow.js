import React from "react";

const ProductsRow = (props) => {
  const { _id, image,name, price } = props.data;
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td><img src={image} alt="" style={{width:'60px',height:'40px'}}/></td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <button onClick={() => props.deleteProduct(_id)}>
          <i className="fas fa-times-circle"></i>
        </button>
      </td>
    </tr>
  );
};

export default ProductsRow;
