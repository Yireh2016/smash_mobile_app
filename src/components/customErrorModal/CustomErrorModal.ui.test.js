import * as React from 'react';
import renderer from 'react-test-renderer';
import CustomErrorModal from './CustomErrorModal';

it('CustomErrorModal renders correctly', () => {
  const props = {
    isModal: true,
    setIsModal: () => {},
    bodyMessage: 'test error modal',
  };
  const Element = () => {
    return <CustomErrorModal {...props} />;
  };

  const errorModal = renderer.create(<Element />).toJSON();
  expect(errorModal).toMatchSnapshot();
});
