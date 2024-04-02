import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';
import { AppDispatch, TStore } from '../types/store';
import { store } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
export const useAppStore: () => typeof store = useStore;
