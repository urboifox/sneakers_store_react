import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto overflow-x-hidden">
        <RouterProvider router={myRoutes} />
      </div>
    </Provider>
  );
}

export default App;
