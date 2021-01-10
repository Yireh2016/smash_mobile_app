import { useEffect } from 'react';
import theme from '../../../../theme/theme';
import routes from '../../../../constants/routes';

export default (
  routesHistory: string[],
  seticonColorArr: React.Dispatch<React.SetStateAction<string[]>>
) => {
  useEffect(() => {
    if (routesHistory.slice(-1)[0]?.match(routes.DASHBOARD)) {
      seticonColorArr([
        theme.palette.primaryContrast,
        theme.palette.secondary,
        theme.palette.primaryContrast,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);
};
