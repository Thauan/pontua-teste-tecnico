import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle/>
    </>
  )
}

export default App;