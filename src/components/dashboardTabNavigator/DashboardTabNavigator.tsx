/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DashboardIcon from '../../assets/DashboardIcon';
import ReviewIcon from '../../assets/ReviewIcon';
import theme from '../../theme/theme';
import CardDetailIcon from '../../assets/CardDetailIcon';
import { P3 } from '../texts/Texts';

export interface DashboardTabNavigatorProps {
  onCardDetailPress: () => void;
  onDashboardIconPress: () => void;
  onReviewPlanPress: () => void;
  iconColorArr: string[];
}

const styles = StyleSheet.create({
  tabNavLayout: {
    flexDirection: 'row',
    backgroundColor: theme.background.color,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 15,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tabNavBtn: {
    flexGrow: 1,
  },
  dashboardIconContainer: {
    marginBottom: 5,
  },
  iconLayout: {
    alignItems: 'center',
  },
});

interface TabNavBtn {
  icon: Element;
  onPress: () => void;
}
const DashboardTabNavigator: React.FunctionComponent<DashboardTabNavigatorProps> = ({
  onCardDetailPress,
  onDashboardIconPress,
  onReviewPlanPress,
  iconColorArr,
}) => {
  const btns = [
    {
      icon: (
        <View
          style={{ ...styles.dashboardIconContainer, ...styles.iconLayout }}
        >
          <View style={{ marginBottom: 6 }}>
            <CardDetailIcon factor={0.9} color={iconColorArr[0]} />
          </View>
          <P3 isBold={true}>Card details</P3>
        </View>
      ),
      onPress: onCardDetailPress,
    },
    {
      icon: (
        <View
          style={{ ...styles.dashboardIconContainer, ...styles.iconLayout }}
        >
          <View style={{ marginBottom: 6 }}>
            <DashboardIcon factor={0.9} color={iconColorArr[1]} />
          </View>
          <P3 isBold={true} color={theme.palette.secondary}>
            Dashboard
          </P3>
        </View>
      ),
      onPress: onDashboardIconPress,
    },
    {
      icon: (
        <View
          style={{ ...styles.dashboardIconContainer, ...styles.iconLayout }}
        >
          <View style={{ marginBottom: 6 }}>
            <ReviewIcon factor={0.9} color={iconColorArr[2]} />
          </View>
          <P3 isBold={true}>Review plan</P3>
        </View>
      ),
      onPress: onReviewPlanPress,
    },
  ];

  const btnMaps = btns.map((btn: TabNavBtn, index: number) => (
    <View key={index} style={styles.btnContainer}>
      <TouchableOpacity testID={'tabNavIcon' + index} onPress={btn.onPress}>
        {btn.icon}
      </TouchableOpacity>
    </View>
  ));
  return <View style={styles.tabNavLayout}>{btnMaps}</View>;
};

export default DashboardTabNavigator;
