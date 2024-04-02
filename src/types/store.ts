import { store } from '../store';

export type TStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
