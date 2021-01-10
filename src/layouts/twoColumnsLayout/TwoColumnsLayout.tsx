/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

interface TwoColumnsLayoutProps {
  left: Element;
  right: Element;
}

const TwoColumnsLayout: React.FC<TwoColumnsLayoutProps> = ({ left, right }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <View style={{ flex: 2 }}>{left}</View>
      <View
        style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}
      >
        {right}
      </View>
    </View>
  );
};

export default TwoColumnsLayout;
