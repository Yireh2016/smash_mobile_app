import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `



<svg xmlns="http://www.w3.org/2000/svg" 
 width="${102.955 * factor}"
 height="${102.955 * factor}"
 viewBox="0 0 102.955 102.955">
  <path  d="M36.4,0A36.4,36.4,0,1,0,72.8,36.4,36.44,36.44,0,0,0,36.4,0ZM52.325,39.433H39.433V52.325a3.033,3.033,0,0,1-6.066,0V39.433H20.475a3.033,3.033,0,0,1,0-6.066H33.367V20.475a3.033,3.033,0,0,1,6.066,0V33.367H52.325a3.033,3.033,0,1,1,0,6.066Zm0,0" transform="translate(51.478) rotate(45)" 
  fill="${color}"/>
</svg>


`;

export default ({ factor = 1, color = '#43d59e' }) => (
  <SvgXml xml={xml(factor, color)} />
);
