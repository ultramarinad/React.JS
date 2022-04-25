export const getCatsFromState = (state) => state.cats;

export const getCatsFactsList = (state) =>
  getCatsFromState(state)?.catsFactsList;

export const getCatsIsLoading = (state) => getCatsFromState(state)?.isLoading;

export const getCatsError = (state) => getCatsFromState(state)?.error;
