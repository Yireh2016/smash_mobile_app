import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number) => `


 <svg xmlns="http://www.w3.org/2000/svg" 
  width=${25 * factor} height=${232 * factor} 
 viewBox="0 0 25 232">
  <line  y2="104" transform="translate(12.5)" fill="none" stroke="#979797" stroke-width="1"/>
  <g  transform="translate(-19 -217.5)">
    <circle  cx="12.5" cy="12.5" r="12.5" transform="translate(19 321)" fill="#979797"/>
    <circle  cx="4.5" cy="4.5" r="4.5" transform="translate(27 329)" fill="#fff"/>
  </g>
  <line  y2="104" transform="translate(12.5 128)" fill="none" stroke="#979797" stroke-width="1"/>
</svg>

`;

export default ({ factor = 1 }) => <SvgXml xml={xml(factor)} />;
