import styled from "styled-components";
import { paddings } from "../../theme/theme";

const SummaryWrapper = styled.div`
  padding: ${paddings.xs};
  box-sizing: border-box;
  border: 1px solid black;
    display: flex;
    flex-direction: column;
    section{
        padding-bottom: ${paddings.xs};
    }
`;

const Price = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const OrderSummary: React.FC = ({ children }) => {
    return (
        <>
          <SummaryWrapper>
            <section>Regular price:</section>
            <section>You save:</section>

            <section>Total price:</section>
            <section>Shipping cost:</section>

            <section>includes 21% VAT:</section>

           <Price>
                <section>Total price incl. VAT:</section>
               <p>1111 EUR</p>
           </Price>
          </SummaryWrapper>
        </>
      );
};

export default OrderSummary;