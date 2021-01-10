import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = (factor: number) => `
<svg width=${10 * factor} height=${
  16 * factor
} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.07107 8.00002L2 15.0711L0.585785 13.6569L6.24264 8.00002L0.585785 2.34317L2 0.928955L9.07107 8.00002Z" fill="#D1D1D6"/>
</svg>`;

export default ({ factor = 1 }) => <SvgXml xml={xml(factor)} />;
