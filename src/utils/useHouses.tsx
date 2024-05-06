import { useOutletContext } from "react-router-dom";
import { UseFetchReturn } from "../types/types";

const useHouses = () => {
  return useOutletContext<UseFetchReturn>();
};

export default useHouses;
