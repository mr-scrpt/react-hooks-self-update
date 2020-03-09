export const fieldShort = register => {
  return register({
    required: { value: true, message: "Обязательное поле" },
    minLength: { value: 4, message: "Минимальное количество символов 4" },
    maxLength: { value: 40, message: "Максимальное количество символов 40" }
  });
};

export const fieldText = register => {
  return register({
    required: { value: true, message: "Обязательное поле" },
    minLength: { value: 4, message: "Минимальное количество символов 4" },
    maxLength: { value: 1200, message: "Максимальное количество символов 1200" }
  });
};

//ref={register({ maxLength: { value: 2, message: "error message" } })}
