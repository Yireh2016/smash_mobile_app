import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `


<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 12.184 11.368"
>
  <path
    d="M4.685,3.647l1-1a.772.772,0,0,1,1,0l5,5a.772.772,0,0,1,0,1l-5,5a.772.772,0,0,1-1,0h-1a.76.76,0,0,1,0-1l3-3h-7a1.451,1.451,0,0,1-1-1v-1c0-.347.653,0,1,0h7l-3-3A.754.754,0,0,1,4.685,3.647Z"
    transform="translate(0.315 -2.464)"
    fill="${color}"
  />
</svg>

`;

export default ({ factor = 1, color = 'white' }) => (
  <SvgXml
    width={12.184 * factor}
    height={11.368 * factor}
    xml={xml(factor, color)}
  />
);
