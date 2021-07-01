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
  const title = ['1 site'];
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
        <Premium
          price={19}
          text="Baby gamer"
          premiumTitles={[
            '1 game',
            '1 site',
            'Up to 50k impressions per month',
            'Real-time statistics',
            'Design customization',
            'Set coupons',
            'Image Upload',
            'Scheduling',
            'Mobile responsive'
          ]}
        />
        <Premium
          price={35}
          text="Junior gamer"
          premiumTitles={[
            '5 games',
            '5 sites',
            'Up to 150k impressions per month',
            'Real-time statistics',
            'Design customization',
            'Set coupons',
            'Image Upload',
            'Scheduling',
            'Mobile responsive'
          ]}
        />
        <Premium
          price={49}
          text="Experience gamer"
          premiumTitles={[
            '5 games',
            '5 sites',
            'Up to 150k impressions per month',
            'Real-time statistics',
            'Design customization',
            'Set coupons',
            'Image Upload',
            'Scheduling',
            'Mobile responsive'
          ]}
        />
        <Premium
          price={199}
          text="Ultra-gamer"
          premiumTitles={[
            '10 games',
            '10 sites',
            'Up to 500k impressions per month',
            'Real-time statistics',
            'Design customization',
            'Set coupons',
            'Image Upload',
            'Scheduling',
            'Personal assistant support',
            'Get all new features before everyone!',
            'Mobile responsive'
          ]}
        />
        <Premium price={199} text="Enterprise" premiumTitles={title} />
      </WrappPremiumCards>
      <Img src={background} alt="background" />
      <GetStarted />
    </Wrapper>
  );
};
export default Pricing;
