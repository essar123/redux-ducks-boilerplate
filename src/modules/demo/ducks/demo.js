import {getRequest} from '../../common/helpers/request';

// ------------------------------------
// Constants
// ------------------------------------
export const TYPES = {
  "FETCH_NAME_REQUEST" : "DEMO/FETCH_NAME_REQUEST",
  "FETCH_NAME_SUCCESS" : "DEMO/FETCH_NAME_SUCCESS",
  "FETCH_NAME_ERROR"   : "DEMO/FETCH_NAME_ERROR"
}

// ------------------------------------
// Actions
// ------------------------------------

const fetchName = (payload) => {
  return (dispatch, getState) => {
    const API = 'https://api.github.com/emojis';

    dispatch(fetchNameRequest());
    return new Promise((resolve, reject) => {
      getRequest(API)
        .then(response => {
          dispatch(fetchNameSuccess({name: 'Home'}));
          resolve(response);
        }).catch(errorMessage => {
          dispatch(fetchNameError({errorMessage}));
          reject(errorMessage);
        })
    });
  }
}

const fetchNameRequest = () => {
  return {
    type: TYPES.FETCH_NAME_REQUEST
  }
}

const fetchNameSuccess = (payload) => {
  return {
    type: TYPES.FETCH_NAME_SUCCESS,
    payload
  }
}

const fetchNameError = (payload) => {
  return {
    type: TYPES.FETCH_NAME_ERROR,
    payload
  }
}

export const actions = {
  fetchName
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const onFetchNameRequest = (state, action) => {
  const _state = {
    ...state,
    status: {
      ...state.status,
      fetchName: {
        isFetching: true,
        errorMessage: null
      }
    }
  }

  return _state;
}

const onFetchNameSuccess = (state, action) => {
  const {name} = action.payload;

  const _state = {
    ...state,
    status: {
      ...state.status,
      fetchName: {
        isFetching: false,
        errorMessage: null
      }
    },
    name
  }

  return _state;
}

const onFetchNameError = (state, action) => {
  const {errorMessage} = action.payload;

  const _state = {
    ...state,
    status: {
      ...state.status,
      fetchName: {
        isFetching: true,
        errorMessage: errorMessage
      }
    }
  }

  return _state;
}

const ACTION_HANDLERS = {
  [TYPES.FETCH_NAME_REQUEST] : onFetchNameRequest,
  [TYPES.FETCH_NAME_SUCCESS] : onFetchNameSuccess,
  [TYPES.FETCH_NAME_ERROR]   : onFetchNameError
}

export const initialState = {
  status: {
    fetchName: {
      isFetching: false,
      errorMessage: null
    }
  }
}

export default function demoReducer (demo = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  var _state = Object.assign({}, demo);
  return handler ? handler(_state, action) : _state;
}
