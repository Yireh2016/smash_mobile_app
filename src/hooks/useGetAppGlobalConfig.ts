import { useEffect } from 'react';
import axios from 'axios';

const CONFIG = {
  QA: 'https://qa-api.smash.money/config/mobile',
  DEV: 'https://dev-api.smash.money/config/mobile',
};

export default (
  setGlobalAppConfig: React.Dispatch<React.SetStateAction<S>>,
  env: string
) => {
  useEffect(() => {
    const getGlobalAppConfig = async () => {
      const { data }: any = await axios.get(
        env?.match('QA') ? CONFIG.QA : CONFIG.DEV
      );
      setGlobalAppConfig(data);
    };

    getGlobalAppConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
