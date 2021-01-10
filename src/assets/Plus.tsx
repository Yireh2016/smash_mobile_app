import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (
  factor = 1,
  color: string,
  colorContrast: string,
  isRound: boolean
) => {
  if (isRound) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width=${25 * factor} height=${
      25 * factor
    } viewBox="0 0 25 25">
  <path id="plus" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.514,12.514,0,0,0,12.5,0Zm5.469,13.542H13.542v4.427a1.042,1.042,0,0,1-2.083,0V13.542H7.031a1.042,1.042,0,0,1,0-2.083h4.427V7.031a1.042,1.042,0,0,1,2.083,0v4.427h4.427a1.042,1.042,0,0,1,0,2.083Zm0,0" fill=${color}/>
</svg>

    `;
  }

  return `



<svg  xmlns="http://www.w3.org/2000/svg" width="${30 * factor}" height="${
    30 * factor
  }" viewBox="0 0 30 30">
  <rect id="Rectangle_429" data-name="Rectangle 429" width="${
    30 * factor
  }" height="${30 * factor}" rx="5" fill="${color}"/>
  <path  d="M13,7.75H8.5V3.25a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v4.5H1a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H5.5v4.5a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-4.5H13a1,1,0,0,0,1-1v-1A1,1,0,0,0,13,7.75Z" transform="translate(8 5.75)" fill="#fff"/>
</svg>


<svg id="Button_primary" data-name="Button primary" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <rect id="Rectangle_429" data-name="Rectangle 429" width="30" height="30" rx="5" fill="#29b782"/>
  <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M13,7.75H8.5V3.25a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v4.5H1a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H5.5v4.5a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-4.5H13a1,1,0,0,0,1-1v-1A1,1,0,0,0,13,7.75Z" transform="translate(8 5.75)" fill="#fff"/>
</svg>




`;
};

export default ({
  factor = 1,
  color = '#29b782',
  colorContrast = '#fff',
  isRound = false,
}) => <SvgXml xml={xml(factor, color, colorContrast, isRound)} />;
