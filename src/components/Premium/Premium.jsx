import React from 'react';
import {
  Month,
  Price,
  CardWrapper,
  Title,
  SelectPlantBtn,
  Wrapper
} from './StyledComponents';

import CheckMarkIcon from '../CheckMarkIcon';

const Premium = ({ price, text, premiumTitles }) => {
  return (
    <CardWrapper>
      <Wrapper>
        <Title>{text}</Title>

        <Price>
          ${price}
          <Month>/mon</Month>
        </Price>

        {premiumTitles.map((textTitle, index) => (
          <CheckMarkIcon key={index.toString()} text={textTitle} />
        ))}
      </Wrapper>

      <SelectPlantBtn>Select plant</SelectPlantBtn>
    </CardWrapper>
  );
};

export default Premium;
