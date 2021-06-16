import React from 'react';
import {
  Month,
  Price,
  Wrapper,
  Title,
  SelectPlantBtn
} from './StyledComponents';

import CheckMarkIcon from '../CheckMarkIcon';
import premiumTitles from '../../shared/constants/premiumTitles';

const Premium = ({ price }) => {
  return (
    <Wrapper>
      <div>
        <Title>Premium</Title>

        <Price>
          ${price}
          <Month>/mon</Month>
        </Price>

        {premiumTitles.map((textTitle, index) => (
          <CheckMarkIcon key={index.toString()} text={textTitle} />
        ))}
      </div>

      <SelectPlantBtn>Select plant</SelectPlantBtn>
    </Wrapper>
  );
};

export default Premium;
