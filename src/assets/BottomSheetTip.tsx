import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${50 * factor}"
 height="${5 * factor}"
  viewBox="0 0 50 5"
>
  <rect
    id="Rectangle_659"
    data-name="Rectangle 659"
    width="50"
    height="5"
    rx="2.5"
    fill="${color}"
  />
</svg>


`;

export default ({ factor = 1, color = '#2c3d49' }) => (
  <SvgXml xml={xml(factor, color)} />
);
