import dateFormats from './dateFormats';

describe('Format dates to MM/DD', () => {
  it('Given Date format MM/DD/YYYY then format ti to MM/DD', () => {
    const mmddyyyyDate = '04/30/1984';

    expect(dateFormats(mmddyyyyDate)).toBe('04/30');
  });

  it('Given Date on ISO format then format ti to MM/DD', () => {
    const isoFormatDate = '1981-04-05';

    expect(dateFormats(isoFormatDate)).toBe('04/05');
  });
});
