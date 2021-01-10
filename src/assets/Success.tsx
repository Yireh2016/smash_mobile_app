import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `


    <svg
  xmlns="http://www.w3.org/2000/svg"
  width=${72.774 * factor} height=${72.774 * factor}
  viewBox="0 0 72.774 72.774"
>
  <g id="check" transform="translate(0 0)">
    <circle
      id="Ellipse_210"
      data-name="Ellipse 210"
      cx="36.387"
      cy="36.387"
      r="36.387"
      transform="translate(0 0)"
      fill="${color}"
    />
    <path
      id="Path_3613"
      data-name="Path 3613"
      d="M114.288,110.145,88.565,135.868,75.943,123.246l-6.409,6.408,19.031,19.031L120.7,116.553Z"
      transform="translate(-58.728 -93.028)"
      fill="#142836"
    />
  </g>
</svg>

`;

export default ({ factor = 1, color = '#43d59e' }) => (
  <SvgXml xml={xml(factor, color)} />
);
