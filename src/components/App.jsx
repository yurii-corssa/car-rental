import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAdverts } from "../redux/adverts/advertsOperations";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};
