import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatchType, RootState } from "../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;