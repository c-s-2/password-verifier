const ERRORS = {
  LENGTH: 'The password should be longer than 8 characters',
  NULL: 'The password should not be null',
  UPPER: 'The password should contain at least one uppercase character',
};

const passwordVerifier = password => {
  if (!password) {
    throw new Error(ERRORS.NULL);
  }

  if (password.length < 8) {
    throw new Error(ERRORS.LENGTH);
  }

  return true;
};

module.exports = {
  ERRORS,
  passwordVerifier,
};