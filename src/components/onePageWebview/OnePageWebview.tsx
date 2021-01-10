import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface OnePageWebviewProps {
  url: string;
}

const OnePageWebview: React.FunctionComponent<OnePageWebviewProps> = ({
  url,
}) => {
  const windowHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();

  const buttonHeight = 70;
  const internalViewTopPadding = 5;
  const barsHeight = 110;
  const notchHeight = insets.top;

  const totalOffsetHeight =
    buttonHeight + internalViewTopPadding + barsHeight + notchHeight;
  return (
    <WebView
      source={{
        uri: url,
      }}
      style={{ height: windowHeight - totalOffsetHeight }}
    />
  );
};

export default OnePageWebview;
