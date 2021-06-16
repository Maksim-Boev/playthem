import React from 'react';
import { Svg, Text, Wrapper } from './style';

const CheckMarkIcon = ({ text }) => {
  return (
    <Wrapper>
      <Svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="#6a4fe4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.5196 0.716029C10.0233 0.44875 9.46961 0.964217 9.14506 1.26968C8.40053 1.99515 7.77051 2.83517 7.0641 3.59883C6.28135 4.43885 5.55588 5.27887 4.75405 6.09983C4.29585 6.55802 3.79948 7.0544 3.49401 7.62714C2.80673 6.95891 2.21489 6.23344 1.45124 5.64163C0.897588 5.22162 -0.0187978 4.91616 0.000293609 5.92801C0.0384764 7.24534 1.20305 8.6581 2.06216 9.55537C2.4249 9.93719 2.90218 10.3381 3.45583 10.3572C4.12403 10.3954 4.81132 9.59355 5.21224 9.15445C5.91865 8.39079 6.49139 7.53165 7.14047 6.74893C7.98049 5.718 8.8396 4.70613 9.66053 3.6561C10.176 3.00699 11.7988 1.40329 10.5196 0.716029ZM0.840283 5.85164C0.821191 5.85164 0.8021 5.85164 0.763917 5.8707C0.687552 5.85164 0.630278 5.83252 0.553912 5.79433C0.611186 5.75615 0.706643 5.77524 0.840283 5.85164Z" />
      </Svg>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default CheckMarkIcon;
