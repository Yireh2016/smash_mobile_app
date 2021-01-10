import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `

<svg xmlns="http://www.w3.org/2000/svg"
width="${28.128 * factor}"
 height="${24 * factor}"
 viewBox="0 0 28.128 24">
  <path 
   d="M23.923,17.434l-3.071-3.946,3.164-4.821,3.043-4.637-5.3,1.64-2.571.8-.38-1.46L17.508,0l-2.39,4.587L14.4,5.97,14.159,5.8,11.654,4.029l-.6,3.011-.043.218L8.2,6.153,0,2.938,6.016,9.369,7.78,11.256l-.742.323L1.245,14.1l6.19,1.26,1.034.21-1.2,1.464L2,23.463,9.61,20.121,12.379,18.9l.976,1.82L15.113,24l1.753-3.279.856-1.6,3.96,1.415,6.446,2.3Z" 
   fill="${color}"/>
</svg>


`;

export default ({ factor = 1, color = '#43d59e' }) => (
  <SvgXml xml={xml(factor, color)} />
);
