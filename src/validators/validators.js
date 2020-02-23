export const fieldShort = register => {
  return register({ required: true, minLength: 2, maxLength: 25 });
};

export const fieldText = register => {
  return register({ required: true, minLength: 2, maxLength: 1200 });
};
