import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface ChildrenProp {
  children: Element | string;
}

export interface PlusButtonProps {
  onPress?(): void;
}

export interface NavigationSmashProps {
  navigation: NavigationProp<ParamListBase>;
  route?: RouteProp<Record<string, object | undefined>, string>;
}

export interface CardBalance {
  apr_percentage: number;
  balance_subject_to_apr: number;
}

export interface TestID {
  testID: string;
}
