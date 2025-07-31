import { processEmails } from './emailProcessor';

describe('processEmails', () => {
  it('correctly classifies valid emails', () => {
    const input = ['  Alice@example.com  ', 'Bob@domain.org'];
    const result = processEmails(input);
    expect(result.validEmails).toEqual(['alice@example.com', 'bob@domain.org']);
    expect(result.invalidEmails).toEqual([]);
  });

  it('handles invalid formats', () => {
    const input = ['foo', 'bar@', '@domain.com', 'user@com', 'bad@@email.com'];
    const result = processEmails(input);
    expect(result.validEmails).toEqual([]);
    expect(result.invalidEmails.length).toBe(input.length);
  });

  it('handles mixed valid/invalid', () => {
    const input = ['valid@domain.com', '  invalid  ', 'no-at-symbol.com'];
    const result = processEmails(input);
    expect(result.validEmails).toEqual(['valid@domain.com']);
    expect(result.invalidEmails.length).toBe(2);
  });

  it('is resilient to empty or null inputs', () => {
    const result = processEmails([]);
    expect(result.validEmails).toEqual([]);
    expect(result.invalidEmails).toEqual([]);
  });
});
