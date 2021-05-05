const { ERRORS, passwordVerifier } = require('../src/password_verifier');

describe('Password Verifier', () => {
  describe('when the password has fewer than 8 characters', () => {
    it('throws an exception', () => {
      expect(() => {
        passwordVerifier('abcdefg');
      }).toThrow(ERRORS.LENGTH);
    });
  });

  describe('when the password is null', () => {
    it('throws an exception', () => {
      expect(() => {
        passwordVerifier(null);
      }).toThrow(ERRORS.NULL);
    });
  });

  describe('when all of the conditions are met', () => {
    it('returns true', () => {
      expect(passwordVerifier('abcdefgh')).toBe(true);
    });
  });
});