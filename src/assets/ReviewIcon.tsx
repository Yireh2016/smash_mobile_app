import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number, color: string) => `



<svg xmlns="http://www.w3.org/2000/svg"
width="${23.882 * factor}" height="${24 * factor}"
viewBox="0 0 23.882 24">
  <g  transform="translate(0)">
    <g >
      <path  d="M52.494,0a2.391,2.391,0,0,0-2.388,2.388,2.366,2.366,0,0,0,.48,1.421L46.69,8.036a2.313,2.313,0,0,0-1.887.327L42.026,6.28a2.354,2.354,0,0,0,.119-.707,2.388,2.388,0,1,0-4.776,0,2.354,2.354,0,0,0,.119.707L34.71,8.362a2.486,2.486,0,1,0,.947,1.279l2.777-2.082a2.376,2.376,0,0,0,2.644,0l2.777,2.082a2.354,2.354,0,0,0-.119.707,2.388,2.388,0,1,0,4.776,0,2.366,2.366,0,0,0-.48-1.421L51.928,4.7a2.363,2.363,0,0,0,.565.075,2.388,2.388,0,0,0,0-4.776Z" transform="translate(-31)" 
      fill="${color}"/>
    </g>
  </g>
  <g  transform="translate(6.368 12.749)">
    <g >
      <path  d="M154.98,240H151.8a.8.8,0,0,0-.8.8v10.455h4.776V240.8A.8.8,0,0,0,154.98,240Z" transform="translate(-151 -240)" 
      fill="${color}"/>
    </g>
  </g>
  <g  transform="translate(12.737 15.933)">
    <g >
      <path  d="M274.98,300H271.8a.8.8,0,0,0-.8.8v7.271h4.776V300.8A.8.8,0,0,0,274.98,300Z" transform="translate(-271 -300)" 
      fill="${color}"/>
    </g>
  </g>
  <g  transform="translate(19.105 9.565)">
    <g >
      <path  d="M394.98,180H391.8a.8.8,0,0,0-.8.8v13.639h4.776V180.8A.8.8,0,0,0,394.98,180Z" transform="translate(-391 -180)" 
      fill="${color}"/>
    </g>
  </g>
  <g  transform="translate(0 17.525)">
    <g >
      <path  d="M34.98,330H31.8a.8.8,0,0,0-.8.8v5.679h4.776V330.8A.8.8,0,0,0,34.98,330Z" transform="translate(-31 -330)" 
      fill="${color}"/>
    </g>
  </g>
</svg>








`;

export default ({ factor = 1, color = '#fff' }) => (
  <SvgXml xml={xml(factor, color)} />
);
