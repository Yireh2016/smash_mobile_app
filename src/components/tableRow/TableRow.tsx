import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface Column {
  component: Element;
  align: string;
  width?: number;
}

interface CustomColumnsTableProps {
  columns: Column[];
}

const CustomColumnsTable: React.FunctionComponent<CustomColumnsTableProps> = ({
  columns,
}) => {
  const styles = StyleSheet.create({
    threeColumnsLayout: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    alignRight: {
      alignItems: 'flex-end',
    },
    alignCenter: {
      alignItems: 'center',
    },
    alignLeft: {
      alignItems: 'flex-start',
    },
  });

  const columnsMap = columns.map((column: Column, i: number) => {
    const { component, align, width } = column;
    let columnAlign;

    switch (align) {
      case 'left':
        columnAlign = styles.alignLeft;
        break;

      case 'center':
        columnAlign = styles.alignCenter;
        break;

      case 'right':
        columnAlign = styles.alignRight;
        break;

      default:
        columnAlign = styles.alignLeft;
        break;
    }

    return (
      <View
        key={i}
        style={{
          ...columnAlign,
          width: width ? `${width}%` : `${100 / columns.length}%`,
        }}
      >
        {component}
      </View>
    );
  });

  return <View style={styles.threeColumnsLayout}>{columnsMap}</View>;
};

export default CustomColumnsTable;
