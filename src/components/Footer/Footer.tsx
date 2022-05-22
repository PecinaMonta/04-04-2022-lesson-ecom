import styled from "styled-components";
import { fontSizes, margins, paddings } from "../../theme/theme";

const StyledFooter = styled.footer`
  width: 100%;
  height: 18rem;
  position: relative;
  bottom: 0;
  text-align: center;
  font-size: ${fontSizes.sm};
`;

const FooterInfo = styled.div`
  border-top: 1px solid black;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  section {
    display: block;
    width: 300px;
  }
  h1 {
    font-size: 20px;
    text-transform: uppercase;
    padding-bottom: ${paddings.xs};
    padding-top: ${paddings.xs};
  }
  ul {
    text-align: left;
    padding-left: ${paddings.lg};
  }
  li {
    padding-bottom: ${paddings.xs};
  }
`;

const Icons = styled.div`
  width: 8rem;
  height: 2rem;
  margin: ${margins.sm} auto;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.a`
  width: 2rem;
  height: 2rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterInfo>
        <section>
          <h1>Customer Service</h1>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>Vouchers</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </section>
        <section>
          <h1>About Company</h1>
          <ul>
            <li>Jobs</li>
            <li>Cookie settings</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Imprint</li>
          </ul>
        </section>
        <section>
          <h1>Payment Methods</h1>
          <ul>
            <li>VISA</li>
            <li>MasterCard</li>
            <li>PayPal</li>
          </ul>
        </section>
      </FooterInfo>
      <Icons>
        <Icon href="/fb" target="_blank">
          <img src={require("../../assets/fb-logo.png")} alt="" />
        </Icon>
        <Icon href="/tw" target="_blank">
          <img src={require("../../assets/tw-logo.png")} alt="" />
        </Icon>
        <Icon href="/inst" target="_blank">
          <img src={require("../../assets/inst-logo.png")} alt="" />
        </Icon>
      </Icons>
      <div>© 2022 Monta Peciņa</div>
    </StyledFooter>
  );
};
export default Footer;
