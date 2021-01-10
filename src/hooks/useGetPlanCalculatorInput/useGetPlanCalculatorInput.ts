import { useEffect } from 'react';
import getPlanCalculatorInput from '../../interfaces/getPlanCalculatorInput/getPlanCalculatorInput';
import errorAlert from '../../helpers/errorAlert';
import { setIsLoading } from '../../store/actions/actions';

const useGetPlanCalculatorInput = (
  setFutureDate: React.Dispatch<React.SetStateAction<S>>,
  updateData: number
) => {
  useEffect(() => {
    const _get = async () => {
      setIsLoading(true);

      try {
        const { calculatorInput } = await getPlanCalculatorInput();

        setFutureDate(calculatorInput);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        errorAlert(error);
      }
    };

    _get();
  }, [setFutureDate, updateData]);
};

export default useGetPlanCalculatorInput;
