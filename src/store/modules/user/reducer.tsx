import produce from 'immer';

const INITIAL_STATE = {
  Speed: 1,
};

export default function user(state = INITIAL_STATE, action) {
  if (action.type === '@user/RESET') {
    return INITIAL_STATE;
  }

  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SET_SPEED':
        draft.Speed = action.payload.data;
        break;
      default:
    }
  });
}