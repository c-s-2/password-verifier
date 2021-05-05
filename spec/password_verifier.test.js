const passwordVerifier = require('../src/password_verifier');

describe('Password Verifier', () => {
  describe('when the password has fewer than 8 characters', () => {
    it('throws an exception', () => {
      expect(() => {
        passwordVerifier();
      }).toThrow('The password should be longer than 8 characters');
    });
  });

  describe('when all of the conditions are met', () => {
    it('returns true', () => {
      expect(passwordVerifier()).toBe(true);
    });
  });
});