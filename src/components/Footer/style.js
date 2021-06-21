import styled from 'styled-components';
import logoFooter from '../../shared/assets/icons/logo-footer.svg';
import logoFooterMini from '../../shared/assets/icons/logo-footer-mini.svg';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 10vw;
  min-height: 120px;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinkFooter = styled.div`
  min-width: 144px;
  color: #37abe6;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 16px;
  @media (max-width: 426px) {
    min-width: auto;
  }
`;

export const Img = styled.div`
  width: 75px;
  height: 75px;
  background: url(${logoFooter});
  @media (max-width: 425px) {
    width: 45px;
    height: 45px;
    background: url(${logoFooterMini});
  }
`;

export default Wrapper;
