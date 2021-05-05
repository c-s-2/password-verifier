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

  describe('when the password does not contain at least one uppercase letter', () => {
    it('throws an exception', () => {
      expect(() => {
        passwordVerifier('abcdefgh');
      }).toThrow(ERRORS.UPPER);
    });
  });

  describe('when the password does not contain at least one lowercase letter', () => {
    it('throws an exception', () => {
      expect(() => {
        passwordVerifier('ABCDEFGH');
      }).toThrow(ERRORS.LOWER);
    });
  });

  describe('when the password does not contain at least one number', () => {
    it('throws an exception', () => {
      expect(() => {
        passwordVerifier('abcDefgh');
      }).toThrow(ERRORS.NUMBER);
    });
  });

  describe('when three conditions are met', () => {
    it('returns true', () => {
      expect(passwordVerifier('abcdefgh')).toBe(true);
    });
  });

  describe('when all of the conditions are met', () => {
    it('returns true', () => {
      expect(passwordVerifier('abcDefgh1')).toBe(true);
    });
  });
});