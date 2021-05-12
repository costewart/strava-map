export const types = {
  SET_ACTIVITIES: "ui/set_activities",
  SET_SPORTS: "ui/set_sports",
};

const initialState = {
  activities: [],
  sports: {
    Ride: true,
    Kitesurf: false,
    Surfing: true,
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ACTIVITIES: {
      const { activities } = payload;
      return {
        ...state,
        activities,
      };
    }

    case types.SET_SPORTS: {
      const { sports } = payload;
      return {
        ...state,
        sports,
      };
    }

    default:
      return state;
  }
};

const getActivities = (state) => state.activities.activities;
const getSports = (state) => state.activities.sports;

export const selectors = {
  getActivities,
  getSports,
};

const setActivities = (activities) => ({
  type: types.SET_ACTIVITIES,
  payload: { activities },
});

const setSports = (sports) => ({
  type: types.SET_SPORTS,
  payload: { sports },
});

const actions = {
  setActivities,
  setSports,
};

export { actions };
