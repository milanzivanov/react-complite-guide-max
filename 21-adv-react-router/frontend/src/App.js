import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";

// absolute path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: "/events/:eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction
              },
              { path: "/events/:eventId/edit", element: <EditEventPage /> }
            ]
          },
          {
            path: "/events/new",
            element: <NewEventPage />,
            action: newEventAction
          }
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
