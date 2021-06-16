import React from 'react';
import Premium from '../../components/Premium';
import Title from '../../components/Title';
import Description from '../../components/Description';
import background from '../../shared/assets/img/pricing/background.svg';

import { WrappText, Wrapper, WrappPremiumCards, Img } from './style';
import GetStarted from '../../components/GetStarted';
import Footer from '../../components/Footer';

const Pricing = () => {
  return (
    <Wrapper>
      <WrappText>
        <Title fontSize="30px" upperCase fontWeight={500}>
          Pop Up buildings price Straightforward, affordable pricing
        </Title>
        <Description>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </Description>
      </WrappText>

      <WrappPremiumCards>
        <Premium price={39} />
        <Premium price={79} />
      </WrappPremiumCards>
      <Img src={background} alt="background" />
      <GetStarted />
      <Footer />
    </Wrapper>
  );
};
export default Pricing;
