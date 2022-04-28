import { CatsPre } from "./catsPre";
import { useDispatch, useSelector } from "react-redux";
import {
  getCatsFactsList,
  getCatsIsLoading,
  getCatsError,
} from "../../store/cats/selectors";
import { getCatsThunk } from "../../store/cats/action";
import { useEffect } from "react";

export const Cats = () => {
  const dispatch = useDispatch();
  const catsFacts = useSelector(getCatsFactsList);
  const isLoading = useSelector(getCatsIsLoading);
  const error = useSelector(getCatsError);

  const requestCatFacts = () => {
    dispatch(getCatsThunk);
  };

  useEffect(() => {
    requestCatFacts();
  }, []);

  return (
    <CatsPre
      catsFacts={catsFacts}
      isLoading={isLoading}
      error={error}
      requestCatFacts={requestCatFacts}
    ></CatsPre>
  );
};
