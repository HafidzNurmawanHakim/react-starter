import {
	Dispatch,
	FC,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
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

	useEffect(() => {
		initialThemeHandler();
	}, []);

	function isThemeEmpty() {
		return !localStorage.getItem("iDarkTheme");
	}

	function initialThemeHandler() {
		if (isThemeEmpty()) {
			localStorage.setItem("isDarkTheme", "true");
			document!.querySelector("body")!.classList.add("dark");
			setIsDarkTheme(true);
		} else {
			const isDarkTheme: boolean = JSON.parse(localStorage.getItem("isDarkTheme")!);
			isDarkTheme && document!.querySelector("body")?.classList.add("dark");
			setIsDarkTheme(() => {
				return isDarkTheme;
			});
		}
	}

	function themeToggle() {
		const isDarkTheme: boolean = JSON.parse(localStorage.getItem("isDarkTheme")!);
		setIsDarkTheme(!isDarkTheme);
		toggleClassToBody();
		setValueToLocalStorage();
	}

	function toggleClassToBody() {
		document!.querySelector("body")!.classList.toggle("dark");
	}

	function setValueToLocalStorage() {
		localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
	}

	return (
		<AppContext.Provider
			value={{ isDarkTheme, themeToggle, showPanel, setHoldOn, setShowPanel, holdOn }}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppControllerProvider, useAppController };
