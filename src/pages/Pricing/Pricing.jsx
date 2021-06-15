import React from 'react';
import Premium from '../../components/Premium';
import Title from '../../components/Title';
import Description from '../../components/Description';

import { WrappText, Wrapper, WrappPremiumCards } from './style';

const Pricing = () => {
  return (
    <Wrapper>
      <WrappText>
        <Title fontSize="30px" upperCase>
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
        <Premium price={79} plus />
      </WrappPremiumCards>
    </Wrapper>
  );
};
export default Pricing;
