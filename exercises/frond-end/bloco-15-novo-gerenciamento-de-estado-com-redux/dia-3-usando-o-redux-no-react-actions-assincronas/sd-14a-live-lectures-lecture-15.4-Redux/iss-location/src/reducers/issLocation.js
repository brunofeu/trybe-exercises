import { GET_ISS_LOCATION_ERROR, GET_ISS_LOCATION_SUCESS } from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  latitude: -25.4284,
  longitude: -49.2733,
  error: null,
};

const issLocation = (
  state = INITIAL_ISS_LOCATION_STATE,
  action,
) => {
  switch (action.type) {
  case GET_ISS_LOCATION_SUCESS:
    return ({
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    });

  case GET_ISS_LOCATION_ERROR:
    return ({
      ...state,
      error: action.payload.error,
    });

  default:
    return state;
  }
};

export default issLocation;
