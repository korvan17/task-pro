export const getStatusAuth = state => state.auth.status;

export const isLoggedIn = state => state.auth.isLoggedIn;

export const isRefreshing = state => state.auth.isRefreshing;

export const getTheme = state => state.auth.user.theme;

export const getError = state => state.auth.error;

export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectEmail = state => state.auth.email;

export const selectComment = state => state.auth.comment;