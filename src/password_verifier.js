/*
Extra consideration

For the extra task I would combine the two regex conditions for uppercase and lowercase into one
condition.  I didn't want to implement it in the code though as it would have meant undoing some of
the work for the previous tasks which I thought might look confusing when this is reviewed - hope
that's ok.
*/

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
    required: false,
  },
  length: {
    condition: password => new RegExp(/(?=.{8,})/).test(password),
    error: ERRORS.LENGTH,
    required: false,
  },
  upper: {
    condition: password => new RegExp(/(?=.*[A-Z])/).test(password),
    error: ERRORS.UPPER,
    required: false,
  },
  lower: {
    condition: password => new RegExp(/(?=.*[a-z])/).test(password),
    error: ERRORS.LOWER,
    required: true,
  },
  number: {
    condition: password => new RegExp(/(?=.*[0-9])/).test(password),
    error: ERRORS.NUMBER,
    required: false,
  },
};

const passwordVerifier = password => {
  let successes = 0;
  let failures = [];

  Object.keys(criteria).forEach(key => {
    const { condition, error, required } = criteria[key];
    const pass = condition(password);

    if (required && !pass) {
      throw new Error(error);
    }

    if (pass) {
      successes++;
    } else {
      failures.push(error);
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