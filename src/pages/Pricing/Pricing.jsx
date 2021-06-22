import React from 'react';
import Premium from '../../components/Premium';
import background from '../../shared/assets/img/pricing/background.svg';

import {
  WrappText,
  Wrapper,
  WrappPremiumCards,
  Img,
  Title,
  Description
} from './style';
import GetStarted from '../../components/GetStarted';

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
        <Premium price={39} text="Premium" />
        <Premium price={79} text="Premium plus" />
      </WrappPremiumCards>
      <Img src={background} alt="background" />
      <GetStarted />
    </Wrapper>
  );
};
export default Pricing;
