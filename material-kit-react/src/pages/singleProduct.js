// import React from "react";
// import styled from "styled-components";
// import { Box, Button } from "@mui/material";
// import { useSelector } from "react-redux";

// const CardContainer = styled(Box)`
//   display: flex;
//   border: 1px solid #ccc;
//   padding: 16px;
//   border-radius: 8px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
// `;

// const CardImage = styled.img`
//   width: 50rem;
//   height: auto;
//   margin-right: 16px;
// `;

// const ContentContainer = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
// `;

// const CheckoutButton = styled(Button)`
//   width: 120px;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
// `;

// const SingleProduct = () => {
//   const product = useSelector((state) => state.products);

//   return (
//     <CardContainer>
//       <CardImage src={product.image} alt={product.title} />
//       <ContentContainer>
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         {/* <CheckoutButton variant="contained" color="primary">
//           Checkout
//         </CheckoutButton> */}
//       </ContentContainer>
//     </CardContainer>
//   );
// };

// export default SingleProduct;
import React from "react";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

const CardContainer = styled(Box)`
  display: flex;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  /* Responsive styles */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardImage = styled.img`
  width: 50rem;
  height: auto;
  margin-right: 16px;

  /* Responsive styles */
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CheckoutButton = styled(Button)`
  width: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;

  /* Responsive styles */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SingleProduct = () => {
  const product = useSelector((state) => state.products);

  return (
    <CardContainer>
      <CardImage src={product.image} alt={product.title} />
      <ContentContainer>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        {/* <CheckoutButton variant="contained" color="primary">
          Checkout
        </CheckoutButton> */}
      </ContentContainer>
    </CardContainer>
  );
};

export default SingleProduct;
