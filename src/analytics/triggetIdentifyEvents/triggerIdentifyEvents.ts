import analytics from '@segment/analytics-react-native';

export default (res: any, user: any) => {
  analytics.identify(user.username, {
    created: `${res.data.created_at}`,
    email: user.attributes.email,
    first_name: user.attributes.given_name,
    last_name: user.attributes.family_name,
    ref1: '',
    ref2: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    promoter_code: '',
    referred_code: '',
    number_entity_linked: '',
    number_account_linked: '',
    number_creditcards_linked: '',
  });
};
