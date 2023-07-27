import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <Provider store={store}>
      <SkeletonTheme
        baseColor="hsl(220, 14%, 85%)"
        highlightColor="hsl(223, 64%, 98%)"
      >
        <div className="overflow-x-hidden">
          <RouterProvider router={myRoutes} />
        </div>
      </SkeletonTheme>
    </Provider>
  );
}

export default App;
