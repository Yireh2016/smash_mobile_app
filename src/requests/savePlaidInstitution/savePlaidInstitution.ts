import apiRequest from '../../helpers/apiRequest/apiRequest';
import logger from '../../helpers/logger/logger';
import axiosErrorProcessing from '../../helpers/axiosErrorProcessing';
import saveInstitututionOnPlaid from '../../interfaces/saveInstitutionOnPlaid/saveInstitutionOnPlaid';
import filterInstitutionDataForSaving from '../../helpers/filterInstitutionDataForSaving/filterInstitutionDataForSaving';
import { triggerEntityLinkFailedType } from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import { User } from '../../store/types/user';

const savePlaidInstitution = async (
  data: any,
  triggerEntityLinkFailed: triggerEntityLinkFailedType,
  user: User
) => {
  await apiRequest({
    data: filterInstitutionDataForSaving(data),
    request: saveInstitututionOnPlaid,
    errorCallback: (error) => {
      const errorMessage = axiosErrorProcessing(error);
      triggerEntityLinkFailed(errorMessage, user);
      logger({ obj: error });
    },
  });
};

export default savePlaidInstitution;
