import { FilterPanel } from "./components/FilterPanel";
import { JobList } from "./components/JobList";
import { TheHeader } from "./components/TheHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPositions } from "./store/positions/actions";
import { ThemeProvider } from "styled-components";
import { baseTheme, GllobalStyle } from "./styles/themes";
import data from "./mock/data.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <GllobalStyle />
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </ThemeProvider>
  );
}

export default App;
