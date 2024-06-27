import { SET_POLLS, SET_CURRENT_POLL } from '../actionTypes';

export const polls = (state = [], action) => {
  switch (action.type) {
    case SET_POLLS:
        console.log("Setting polls:", action.polls);
      return action.polls;
    default:
      return state;
  }
};

export const currentPoll = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_POLL:
        console.log("Setting current poll:", action.poll);
      return action.poll;
    default:
      return state;
  }
};
