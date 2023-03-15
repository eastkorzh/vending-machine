import { Routing } from "src/pages";
import { withProviders } from "./providers";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./reset.css";
import "./index.css";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
