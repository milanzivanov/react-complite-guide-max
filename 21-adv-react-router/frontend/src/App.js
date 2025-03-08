import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";

// absolute path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");
              if (!response.ok) {
                //
              } else {
                const resData = await response.json();
                return resData.events;
              }
            }
          },
          { path: "/events/:eventId", element: <EventDetailPage /> },
          { path: "/events/new", element: <NewEventPage /> },
          { path: "/events/:eventId/edit", element: <EditEventPage /> }
        ]
      }
    ]
  }
]);

// relative path
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventsRootLayout />,
//         children: [
//           { index: true, element: <EventsPage /> },
//           { path: ":eventId", element: <EventDetailPage /> },
//           { path: "new", element: <NewEventPage /> },
//           { path: ":eventId/edit", element: <EditEventPage /> }
//         ]
//       }
//     ]
//   }
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
