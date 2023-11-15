import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {AppDispatch, RootState} from './store'

// New dispatch that helps Typescript determine the types needed when sending actions
export const useAppDispatch = () => useDispatch<AppDispatch>();

// You can get data from the state as the types you expect dynamically.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;