import * as React from 'react';

import { SvgXml } from 'react-native-svg';

const xml = (factor: number) => `
<svg width="${188 * factor}" height="${
  188 * factor
}"  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 776.8 662.5" style="enable-background:new 0 0 776.8 662.5;">
<path fill="#2BB782" d="M466.3,152.1l25,96l126-39l-109,166l109,140l-154-55l-46,86l-51-95l-123,54l91-111l-118-24l92-40l-102-109
	l139,54.5l14-70.5l58,41L466.3,152.1 M483.5,0l-66,126.6l-19.9,38.2l-6.6-4.7l-69.2-48.9l-16.5,83.1l-1.2,6l-77.8-30.5L0,81.1
	l166.1,177.5l48.7,52.1l-20.5,8.9l-160,69.6l171,34.8l28.6,5.8l-33.1,40.4L55.3,647.7l210.2-92.3l76.5-33.6l27,50.2l48.5,90.4
	l48.4-90.5l23.6-44.2l109.4,39l178,63.6L660.7,481.3l-84.8-108.9l87.4-133.1l84-128L601,156.5l-71,22l-10.5-40.3L483.5,0z"/>
</svg>

`;

export default ({ factor = 1 }) => <SvgXml xml={xml(factor)} />;
