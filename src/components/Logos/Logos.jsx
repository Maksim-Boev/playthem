import React from 'react';
import amazon from '../../assets/icon/amazon.png';
import yahoo from '../../assets/icon/castcom_yahoo.png';
import ebay from '../../assets/icon/ebay.png';
import ebayProStores from '../../assets/icon/ebay-proStores.png';
import shopify from '../../assets/icon/shopify.png';
import vendi from '../../assets/icon/vendi.png';
import volusion from '../../assets/icon/volusion.png';
import zencart from '../../assets/icon/zencart.png';
import {
  Img,
  Title,
  StyleIcon,
  Wrapper,
  WrapperIcon
} from './StyledComponents';

const images = [
  {
    link: 'https://www.amazon.com/',
    src: amazon
  },
  {
    link: 'https://www.yahoo.com/',
    src: yahoo
  },
  {
    link: 'https://www.ebay.com/',
    src: ebay
  },
  {
    link: 'https://www.ebay.com/',
    src: ebayProStores
  },
  {
    link: 'https://www.shopify.com/',
    src: shopify
  },
  {
    link: 'https://vendiapp.com/',
    src: vendi
  },
  {
    link: 'https://www.volusion.com/',
    src: volusion
  },
  {
    link: 'https://www.zen-cart.com/',
    src: zencart
  }
];

const Logos = () => {
  return (
    <Wrapper>
      <Title>Integrate PLAYTHEM with your favorite eCommerce stack</Title>
      <StyleIcon>
        {images.map(({ src, link }) => (
          <WrapperIcon href={link}>
            <Img src={src} alt="icon" />
          </WrapperIcon>
        ))}
      </StyleIcon>
    </Wrapper>
  );
};

export default Logos;
