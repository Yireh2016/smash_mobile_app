import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (color: string) => `
 <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23.136 15.424">
  <path  d="M6.427,25.707H29.563V23.136H6.427v2.571Zm0-6.427H29.563V16.71H6.427V19.28Zm0-9v2.571H29.563V10.283H6.427Z" transform="translate(-6.427 -10.283)" fill=${color}/>
</svg>
`;

export default ({ factor = 1, color = '#fff' }) => (
  <SvgXml
    height={`${15.424 * factor}`}
    width={`${23.136 * factor}`}
    xml={xml(color)}
  />
);
