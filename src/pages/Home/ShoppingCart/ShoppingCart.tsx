import Footer from "../../../components/Footer/Footer";
import styled from "styled-components";
import Product from ""

const ProductList = styled.div`
    width: 100%;
    padding: ${padding.xs};
`

const ShoppingCart:React.FC = () => {
    return (
        <>
        <ProductList>Page content</ProductList>
        <Footer />
        </>
    )
};

export default ShoppingCart;