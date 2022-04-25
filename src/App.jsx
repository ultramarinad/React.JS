import { Container } from "@mui/material";
import { AllRoutes } from "./routes/AllRoutes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </Container>
  );
}

export default App;
