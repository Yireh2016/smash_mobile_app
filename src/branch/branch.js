// import branch, { BranchEvent } from 'react-native-branch';
import branch from 'react-native-branch';
import logger from '../helpers/logger/logger';
import routes from '../constants/routes';

const branchInit = async (navigationRef) => {
  branch.subscribe(({ error, params, uri }) => {
    if (error) {
      logger({ type: 'error', str: 'Error from Branch: ' + error });
      return;
    }
    // params will never be null if error is null
    if (
      params['+non_branch_link'] &&
      params['+non_branch_link']?.match('signin')
    ) {
      navigationRef.current.navigate(routes.SIGN_IN, {});
      return;
    }

    if (!params['+clicked_branch_link']) {
      // Indicates initialization success and some other conditions.
      // No link was opened.
      return;
    }
  });
};

export default branchInit;
