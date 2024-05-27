import {
   Dispatch,
   FC,
   SetStateAction,
   createContext,
   useCallback,
   useContext,
   useEffect,
   useMemo,
   useState,
} from "react";

type AppContextProps = {
   isDarkTheme: boolean;
   themeToggle: () => void;
   showPanel: boolean;
   setShowPanel: Dispatch<SetStateAction<boolean>>;
   holdOn: boolean;
   setHoldOn: Dispatch<SetStateAction<boolean>>;
};

interface AppProviderProps {
   children?: JSX.Element | JSX.Element[];
}

const initThemeContextProps = {
   isDarkTheme: false,
   themeToggle: () => {},
   showPanel: false,
   setShowPanel: () => {},
   holdOn: false,
   setHoldOn: () => {},
};

const AppContext = createContext<AppContextProps | undefined>(
   initThemeContextProps
);

const useAppController = () => {
   const context = useContext(AppContext);
   if (!context) {
      throw new Error("useAppController must be use within a Theme Provider!");
   }
   return context;
};

const AppControllerProvider: FC<AppProviderProps> = ({ children }) => {
   const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
   const [showPanel, setShowPanel] = useState<boolean>(false);
   const [holdOn, setHoldOn] = useState<boolean>(false);

   const isThemeEmpty = useCallback(() => {
      return !localStorage.getItem("isDarkTheme");
   }, []);

   const initialThemeHandler = useCallback(() => {
      if (isThemeEmpty()) {
         localStorage.setItem("isDarkTheme", "true");
         document.querySelector("body")?.classList.add("dark");
         setIsDarkTheme(true);
      } else {
         const storedIsDarkTheme = JSON.parse(
            localStorage.getItem("isDarkTheme")!
         );
         if (storedIsDarkTheme) {
            document.querySelector("body")?.classList.add("dark");
         }
         setIsDarkTheme(storedIsDarkTheme);
      }
   }, [isThemeEmpty]);

   useEffect(() => {
      initialThemeHandler();
   }, [initialThemeHandler]);

   const themeToggle = () => {
      setIsDarkTheme((prevIsDarkTheme) => {
         const newIsDarkTheme = !prevIsDarkTheme;
         toggleClassToBody(newIsDarkTheme);
         localStorage.setItem("isDarkTheme", JSON.stringify(newIsDarkTheme));
         return newIsDarkTheme;
      });
   };

   const toggleClassToBody = (isDark: boolean) => {
      const bodyClassList = document.querySelector("body")?.classList;
      if (isDark) {
         bodyClassList?.add("dark");
      } else {
         bodyClassList?.remove("dark");
      }
   };

   function setValueToLocalStorage() {
      localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
   }

   const contextProps = useMemo(
      () => ({
         isDarkTheme,
         themeToggle,
         showPanel,
         setHoldOn,
         setShowPanel,
         holdOn,
      }),
      [isDarkTheme, themeToggle, showPanel, setHoldOn, setShowPanel, holdOn]
   );

   return (
      <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
   );
};

export { AppControllerProvider, useAppController };
