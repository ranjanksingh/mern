
const INITIAL_STATE = {
    name: 'Ranjan Kumar',
    mood: 'pissed',
    greetMessage: 'What are you looking at?'
  };
  function someReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHANGE_MOOD':
          return {
            ...state,
            mood: action.payload,
          };
        case 'CHANGE_GREET_MESSAGE':
          return {
            ...state,
            greetMessage: action.payload,
          };
        case 'RESET_MOOD':
          return {
            ...state,
            ...INITIAL_STATE,
          };
        default:
          return state;
      }
  }
export default someReducer;