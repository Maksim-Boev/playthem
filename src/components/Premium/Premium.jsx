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

const Premium = ({ plus, price }) => {
  const them = plus ? 'true' : 'false';
  return (
    <Wrapper color={them}>
      <div>
        <Title color={them}>Premium</Title>

        <Price color={them}>
          ${price}
          <Month color={them}>/mon</Month>
        </Price>

        {premiumTitles.map((textTitle, index) => (
          <CheckMarkIcon
            key={index.toString()}
            colorIcon={plus ? '#fff' : '#6A4FE4'}
            text={textTitle}
            colorText={plus}
          />
        ))}
      </div>

      <SelectPlantBtn outlined={them}>Select plant</SelectPlantBtn>
    </Wrapper>
  );
};

export default Premium;
