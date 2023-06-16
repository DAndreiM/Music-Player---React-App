import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Root from "./Pages/Root/Root";
import MainPage from "./Pages/MainPage/MainPage";
import Home from "./Pages/Home/Home";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";

const PlayCategory = lazy(() => import("./Pages/PlayCategory/PlayCategory"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/playlist/:playlistID",
            element: (
              <Suspense
                fallback={
                  <p style={{ textAlign: "center", color: "white" }}>
                    Page loading...
                  </p>
                }
              >
                <PlayCategory Type="Playlist" />
              </Suspense>
            ),
          },
          {
            path: "/track/:playlistID",
            element: (
              <Suspense
                fallback={
                  <p style={{ textAlign: "center", color: "white" }}>
                    Page loading...
                  </p>
                }
              >
                <PlayCategory Type="Track" />
              </Suspense>
            ),
          },
          {
            path: "/artist/:playlistID",
            element: (
              <Suspense
                fallback={
                  <p style={{ textAlign: "center", color: "white" }}>
                    Page loading...
                  </p>
                }
              >
                <PlayCategory Type="Artist" />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
      <MusicPlayer />
    </>
  );
};

export default App;
