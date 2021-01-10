/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import { P1 } from '../texts/Texts';

const BetaDisclaimer: React.FunctionComponent = () => (
  <View>
    <P1 style={{ marginTop: 21 }}>
      “Limitation on Liability Provision of any Software under this Agreement is
      experimental and shall not create any obligation for Smash Works Inc. to
      continue to develop, productize, support, repair, offer for sale or in any
      other way continue to provide or develop Software either to Licensee or to
      any other party. THE SOFTWARE IS PROVIDED “AS IS” WITHOUT ANY EXPRESS OR
      IMPLIED WARRANTY OF ANY KIND INCLUDING WARRANTIES OF MERCHANTABILITY OR
      FITNESS FOR ANY PARTICULAR PURPOSE. IN NO EVENT SHALL Smash Works Inc. OR
      ITS SUPPLIERS BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT
      LIMITATION, DAMAGES FOR LOSS OF PROFITS, BUSINESS INTERRUPTION, LOSS OF
      INFORMATION) ARISING OUT OF THE USE OF OR INABILITY TO USE THE SOFTWARE,
      EVEN IF Smash Works, Inc. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
      DAMAGES.”
    </P1>
  </View>
);

export default BetaDisclaimer;
