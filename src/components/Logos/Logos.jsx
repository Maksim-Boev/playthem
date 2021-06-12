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
    link: 'https://www.ebay.com/"',
    src: ebayProStores
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
      <StyleIcon>
        <WrapperIcon href="https://www.shopify.com/">
          <Img src={shopify} alt="icon" />
        </WrapperIcon>
        <WrapperIcon href="https://vendiapp.com/">
          <Img src={vendi} alt="icon" />
        </WrapperIcon>
        <WrapperIcon href="https://www.volusion.com/">
          <Img src={volusion} alt="icon" />
        </WrapperIcon>
        <WrapperIcon href="https://www.zen-cart.com/">
          <Img src={zencart} alt="icon" />
        </WrapperIcon>
      </StyleIcon>
    </Wrapper>
  );
};

export default Logos;
