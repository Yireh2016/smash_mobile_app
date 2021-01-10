import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `

<svg xmlns="http://www.w3.org/2000/svg"
width="${19.666 * factor}" height="${14.666 * factor}"
  viewBox="0 0 19.666 14.666">
  <path  d="M6.68,18.955.288,12.563a.983.983,0,0,1,0-1.391L1.679,9.782a.983.983,0,0,1,1.391,0l4.306,4.306L16.6,4.865a.983.983,0,0,1,1.391,0l1.391,1.391a.983.983,0,0,1,0,1.391L8.07,18.955A.983.983,0,0,1,6.68,18.955Z" transform="translate(0 -4.577)" 
 fill="${color}"/>
</svg>


`;

export default ({ factor = 1, color = '#43d59e' }) => (
  <SvgXml xml={xml(factor, color)} />
);
