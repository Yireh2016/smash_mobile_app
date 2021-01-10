/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

interface TwoColumnsLayoutProps {
  left: Element;
  middle: Element;
  right: Element;
}

const TwoColumnsLayout: React.FC<TwoColumnsLayoutProps> = ({
  left,
  middle,
  right,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 5,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 0.33,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {left}
      </View>
      <View
        style={{
          flex: 0.33,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {middle}
      </View>

      <View
        style={{
          flex: 0.33,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        {right}
      </View>
    </View>
  );
};

export default TwoColumnsLayout;
