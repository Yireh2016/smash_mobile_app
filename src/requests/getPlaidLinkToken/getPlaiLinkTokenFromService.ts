import getPlaidLinkConfig from '../../interfaces/getPlaidLinkConfig/getPlaidLinkConfig';

const getPlaidLinkTokenFromService = async () => {
  try {
    const { data } = await getPlaidLinkConfig();
    return data.link_token;
  } catch (error) {
    return '';
  }
};

export default getPlaidLinkTokenFromService;
