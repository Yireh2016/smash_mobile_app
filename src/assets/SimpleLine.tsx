import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `

<svg
  xmlns="http://www.w3.org/2000/svg"
   width="${50 * factor}" height="${7 * factor}"

  viewBox="0 0 50 7"
>
  <rect
    id="Rectangle_26"
    data-name="Rectangle 26"
    width="50"
    height="7"
    rx="3.5"
    fill="${color}"
  />
</svg>

`;

export default ({ factor = 1, color = '#43d59e' }) => (
  <SvgXml xml={xml(factor, color)} />
);
