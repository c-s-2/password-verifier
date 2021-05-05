const ERRORS = {
  LENGTH: 'The password should be longer than 8 characters',
};

const passwordVerifier = password => {
  if (password.length < 8) {
    throw new Error(ERRORS.LENGTH);
  }

  return true;
};

module.exports = {
  ERRORS,
  passwordVerifier,
};