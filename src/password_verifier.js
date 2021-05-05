const ERRORS = {
  LENGTH: 'The password should be longer than 8 characters',
  NULL: 'The password should not be null',
  UPPER: 'The password should contain at least one uppercase character',
  LOWER: 'The password should contain at least one lowercase character',
};

const passwordVerifier = password => {
  const upperRegex = /(?=.*[A-Z])/;

  if (!password) {
    throw new Error(ERRORS.NULL);
  }

  if (password.length < 8) {
    throw new Error(ERRORS.LENGTH);
  }

  if (!upperRegex.test(password)) {
    throw new Error(ERRORS.UPPER);
  }

  return true;
};

module.exports = {
  ERRORS,
  passwordVerifier,
};