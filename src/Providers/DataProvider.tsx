import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { House } from "../utils/types";

export type DataContextType = {
  data: House[] | null;
  isPending: boolean;
  error: string | null;
};

const DataContext = createContext<DataContextType>({
  data: null,
  isPending: true,
  error: null,
});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<House[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const base = process.env.NODE_ENV === "production" ? "/kasa-app/" : "/";
  const url = base + "data/logements.json";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data.");
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);
  return (
    <DataContext.Provider value={{ data, isPending, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("useData must be used within DataProvider");
  }
  return context;
};

export default DataProvider;
