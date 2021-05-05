const MIN_CRITERIA = 3;

const ERRORS = {
  LENGTH: 'The password should be longer than 8 characters',
  NULL: 'The password should not be null',
  UPPER: 'The password should contain at least one uppercase character',
  LOWER: 'The password should contain at least one lowercase character',
  NUMBER: 'The password should contain at least one number',
};

const criteria = {
  null: {
    condition: password => !!password,
    error: ERRORS.NULL,
  },
  length: {
    condition: password => new RegExp(/(?=.{8,})/).test(password),
    error: ERRORS.LENGTH,
  },
  upper: {
    condition: password => new RegExp(/(?=.*[A-Z])/).test(password),
    error: ERRORS.UPPER,
  },
  lower: {
    condition: password => new RegExp(/(?=.*[a-z])/).test(password),
    error: ERRORS.LOWER,
  },
  number: {
    condition: password => new RegExp(/(?=.*[0-9])/).test(password),
    error: ERRORS.NUMBER,
  },
};

const passwordVerifier = password => {
  let successes = 0;
  let failures = [];

  Object.keys(criteria).forEach(key => {
    const test = criteria[key];
    const pass = test.condition(password);

    if (pass) {
      successes++;
    } else {
      failures.push(test.error);
    }
  });

  if (successes >= MIN_CRITERIA) {
    return true;
  }

  throw new Error(failures.join(','));
};

module.exports = {
  ERRORS,
  passwordVerifier,
};