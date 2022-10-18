import { LOGIN, SIGNUP, ISUSER, LOGOUT } from "../actions/AuthActions";

const initialState = {
  isUser: false,
  data: [],
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        isUser: true,
        data: action.payload,
      };
    }
    case SIGNUP: {
      return {
        isUser: true,
        data: action.payload,
      };
    }
    case ISUSER: {
      return action.payload;
    }
    case LOGOUT: {
      return action.payload;
    }
    default:
      return state;
  }
}
