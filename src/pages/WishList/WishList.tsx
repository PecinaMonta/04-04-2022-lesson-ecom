import styled from "styled-components";
import {Link} from 'react-router-dom'
import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";
import { margins, paddings } from "../../theme/theme";
import { useContext } from "react";
import UserContext from "../../UserContext";

const WishListWrapper = styled.div`
  border: 1px solid black;
  padding: ${paddings.md};
  text-align: center;
`;

const WishListInfo = styled.div`
  margin-bottom: ${margins.md};
  img{
    padding-top:${paddings.lg};
  }
`;

const TitleInfo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: ${margins.xs};
`;

const AdditionalInfo = styled.p`
  font-size: 12px;
`;


const WishList: React.FC = () => {
  const { value } = useContext(UserContext);

  return (
    <>
    <WishListWrapper>
      <WishListInfo>
        <TitleInfo>Your wishlist is empty</TitleInfo>
        <AdditionalInfo>Use the heart icon to add a product to your wishlist</AdditionalInfo>
        <Link to="/">View shop <img src={require("../../assets/wishlist/arrow-right.svg")} alt=">" /></Link>
      </WishListInfo>
      <ProductList>
      <div>{value}</div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </WishListWrapper>
    </>
  );
};

export default WishList;