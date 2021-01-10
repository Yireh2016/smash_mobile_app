import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `
    <svg  xmlns="http://www.w3.org/2000/svg" width=${111.733 * factor} height=${
  111.733 * factor
}  viewBox="0 0 111.733 111.733">
    <g >
        <g >
        <path  d="M55.867,0a55.867,55.867,0,1,0,55.867,55.867A55.835,55.835,0,
        0,0,55.867,0Zm0,103A47.138,47.138,0,1,1,103,55.867,47.111,47.111,0,0,1,
        55.867,103Z" fill="${color}"/>
        </g>
    </g>
    <g  transform="translate(51.502 28.125)">
        <g >
        <path  d="M240.365,128.877A4.364,4.364,0,0,0,236,133.242v28.106a4.365,
        4.365,0,1,0,8.729,0V133.242A4.364,4.364,0,0,0,240.365,128.877Z" transform="translate(-236 -128.877)" fill="${color}"/>
        </g>
    </g>
    <g  transform="translate(49.975 70.305)">
        <g >
        <circle  cx="5.892" cy="5.892" r="5.892" fill="${color}"/>
        </g>
    </g>
    </svg>

`;

export default ({ factor = 1, color = '#43d59e' }) => (
  <SvgXml xml={xml(factor, color)} />
);
