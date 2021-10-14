import { getCurrentISSLocation } from '../services/issAPI';

export const GET_ISS_LOCATION_SUCESS = 'GET_ISS_LOCATION_SUCESS';
export const GET_ISS_LOCATION_ERROR = 'GET_ISS_LOCATION_ERROR';

export const getISSLocationSuccess = (payload) => ({
  type: GET_ISS_LOCATION_SUCESS,
  payload,
});

export const getISSLocationError = (payload) => ({
  type: GET_ISS_LOCATION_ERROR,
  payload,
});

export const getISSLocationThunk = () => async (dispatch) => {
  try {
    const response = await getCurrentISSLocation();
    const payload = {
      latitude: Number(response.iss_position.latitude),
      longitude: Number(response.iss_position.longitude),
    };
    dispatch(getISSLocationSuccess(payload));
  } catch (error) {
    dispatch(getISSLocationError(error));
  }
};
