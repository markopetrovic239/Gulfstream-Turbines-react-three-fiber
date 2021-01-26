export function setSpeed(data) {
  return {
    type: `@user/SET_SPEED`,
    payload: {
      data,
    },
  };
}
