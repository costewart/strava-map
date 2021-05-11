export const types = {
  SET_ACTIVITIES: "ui/set_activities",
};

const initialState = {
  activities: [],
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

    default:
      return state;
  }
};

const getActivities = (state) => state.activities.activities;

export const selectors = {
  getActivities,
};

const setActivities = (activities) => ({
  type: types.SET_ACTIVITIES,
  payload: { activities },
});

const actions = {
  setActivities
};

export { actions };
