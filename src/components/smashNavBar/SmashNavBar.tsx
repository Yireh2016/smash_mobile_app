/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import NavigationBar from 'react-native-navbar';

interface LinkedAccountsWrapperInterface {
  children?: JSX.Element;
  label?: string;
  titleElement?: JSX.Element;
  RightButton?: JSX.Element;
  LeftButton?: JSX.Element;
}

const LinkedAccountsWrapper: React.FunctionComponent<LinkedAccountsWrapperInterface> = ({
  children,
  label,
  titleElement,
  RightButton,
  LeftButton,
}) => {
  const titleConfig = titleElement
    ? {
        title: titleElement,
      }
    : {
        title: label,
      };

  const styles = {
    container: {
      flex: 1,
    },
  };
  return (
    <>
      <NavigationBar
        containerStyle={{
          height: 90,
          backgroundColor: 'blue',
          padding: 15,
        }}
        style={styles.container}
        title={titleConfig}
        rightButton={RightButton}
        leftButton={LeftButton}
      />
      {children}
    </>
  );
};

export default LinkedAccountsWrapper;
