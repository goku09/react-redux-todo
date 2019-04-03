import { DELETE_TODO, ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds.filter(item => item !== id)],
        byIds: {
          ...Object.keys(state.byIds).reduce((object, key) => {
            if (parseInt(key) !== id) {
              object[key] = state.byIds[key];
            }
            return object;
          }, {})
        }
      };
    }

    default:
      return state;
  }
};
