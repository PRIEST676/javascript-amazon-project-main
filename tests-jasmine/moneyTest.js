import { formatCurreny } from "../scripts/utils/money.js";

describe('test Suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurreny(2095)).toEqual('20.95');
  });

  it('works with 0',() => {
    expect(formatCurreny(0)).toEqual('0.00')
  });

  it('rounds up to nearest cent', () => {
    expect(formatCurreny(2000.5)).toEqual('20.01')
  });
});