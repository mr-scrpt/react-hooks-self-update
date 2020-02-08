
export const errorsList = (errors) => {
  return Object.keys(errors).map(name => {
    const message = errors[name].join(' ');
    return `${name} ${message}`
  })

}

