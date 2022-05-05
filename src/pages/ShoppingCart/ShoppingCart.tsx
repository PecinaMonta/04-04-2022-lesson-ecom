import styled from "styled-components";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";
import SubmitButton from "../../components/SubmitBtn/SubmitBtn";
import { paddings } from "../../theme/theme";

const ProductWrapper = styled.div`
  border: 1px solid black;
  padding: ${paddings.md};
  display: flex;
  justify-content: space-evenly;
`;

const OrderList = styled.div`
  border: 1px solid pink;
  width: 40%;
`;

const ShoppingCart: React.FC = () => {
  return (
    <>
      <ProductWrapper>
       
        <ProductList>
          <h1>Product List</h1>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>

        <OrderList>
          <h1>Order Summary</h1>
        <OrderSummary />
        <SubmitButton title="checkout" />
        </OrderList>
        
      </ProductWrapper>
    </>
  );
};
export default ShoppingCart;
