import * as React from 'react';
import renderer from 'react-test-renderer';
import DashboardView from './DashboardView';
import cards from '../../mocks/cards';

const propsDashboardView = {
  isLoading: true,
  onWalletMonitorDetails: jest.fn(),
  onAddCardSuccess: jest.fn(),
  onAddCardExit: jest.fn(),
  onCreatePlan: jest.fn(),
  onPlanDetails: jest.fn(),
  tokenConfig: { token: 'test' },
  isPlanSaved: true,
  totalDebt: '12,000$',
  cards,
  isEditable: false,
  sliderControl: 0,
  monthlyPayment: '545$',
  monthlyInput: '',
  onMonthlyInputChange: jest.fn(),
  estimatedPayoffTime: '2 nov, 2020',
  estimatedSavings: '234$',
  estimatedPayoffDate: '',
  onCardDetailPress: jest.fn(),
  onDashboardIconPress: jest.fn(),
  onReviewPlanPress: jest.fn(),
  iconColorArr: ['white', 'green', 'white'],
};
describe('DashboardView renders correctly', () => {
  it('DashboardView with plan and cards renders correctly ', () => {
    const Element = () => {
      const dashboardLocalLoaderRef = React.useRef();
      const DashboardViewProps2 = JSON.parse(
        JSON.stringify(propsDashboardView)
      );
      DashboardViewProps2.dashboardLocalLoaderRef = dashboardLocalLoaderRef;
      return <DashboardView {...DashboardViewProps2} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('DashboardView without plan and with cards renders correctly', () => {
    const Element = () => {
      const dashboardLocalLoaderRef = React.useRef();
      const DashboardViewProps2 = JSON.parse(
        JSON.stringify(propsDashboardView)
      );
      DashboardViewProps2.isPlanSaved = false;
      DashboardViewProps2.dashboardLocalLoaderRef = dashboardLocalLoaderRef;

      return <DashboardView {...DashboardViewProps2} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('DashboardView with plan and without cards renders correctly', () => {
    const DashboardViewProps3 = JSON.parse(JSON.stringify(propsDashboardView));
    DashboardViewProps3.cards = null;

    const Element = () => {
      const dashboardLocalLoaderRef = React.useRef();
      DashboardViewProps3.dashboardLocalLoaderRef = dashboardLocalLoaderRef;
      return <DashboardView {...DashboardViewProps3} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('DashboardView without plan and without cards renders correctly', () => {
    const DashboardViewProps4 = JSON.parse(JSON.stringify(propsDashboardView));
    DashboardViewProps4.isPlanSaved = false;
    DashboardViewProps4.cards = null;

    const Element = () => {
      return <DashboardView {...DashboardViewProps4} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
