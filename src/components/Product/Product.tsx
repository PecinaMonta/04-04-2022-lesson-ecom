import styled from "styled-components";
import { colors } from "../../theme/theme";

const StyledProduct = styled.div`
    width: 100%;
    height: 5rem;
    border: 1px solid ${colors.darkBlue};
`

const ProductImage = styled.div`
    width: 4rem;
    height: 4rem;
    background: ${colors.lightBlue};
`



const Product:React.FC = () => {
    return (
        <StyledProduct>
            <ProductImage>
            <p>product name</p>
            </ProductImage>
        </StyledProduct>
    )
};

export default Product;