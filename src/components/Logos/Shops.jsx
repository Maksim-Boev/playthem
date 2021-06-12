import React from 'react';
import amazon from '../../assets/icon/amazon.png';
import yahoo from '../../assets/icon/castcom_yahoo.png';
import ebay from '../../assets/icon/ebay.png';
import ebayProStores from '../../assets/icon/ebay-proStores.png';
import shopify from '../../assets/icon/shopify.png';
import vendi from '../../assets/icon/vendi.png';
import volusion from '../../assets/icon/volusion.png';
import zencart from '../../assets/icon/zencart.png';
import { Img, Wrapper } from './StyledComponents';

const Shops = () => {
  return (
    <>
      <Wrapper>
        <a href="https://www.amazon.com/">
          <Img src={amazon} alt="icon" />
        </a>
        <a href="https://www.yahoo.com/">
          <Img src={yahoo} alt="icon" />
        </a>
        <a href="https://www.ebay.com/">
          <Img src={ebay} alt="icon" />
        </a>
        <a href="https://www.ebay.com/">
          <Img src={ebayProStores} alt="icon" />
        </a>
      </Wrapper>
      <Wrapper>
        <a href="https://www.shopify.com/">
          <Img src={shopify} alt="icon" />
        </a>
        <a href="https://vendiapp.com/">
          <Img src={vendi} alt="icon" />
        </a>
        <a href="https://www.volusion.com/">
          <Img src={volusion} alt="icon" />
        </a>
        <a href="https://www.zen-cart.com/">
          <Img src={zencart} alt="icon" />
        </a>
      </Wrapper>
    </>
  );
};

export default Shops;
