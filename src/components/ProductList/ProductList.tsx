import styled from "styled-components";
import { paddings } from "../../theme/theme";

const StyledProductList = styled.div`
  padding: ${paddings.xs};
  box-sizing: border-box;
  width:55%;
  
`;

const ProductList: React.FC = ({ children }) => {
  return <StyledProductList>{children}</StyledProductList>;
};

export default ProductList;