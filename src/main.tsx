import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import ColoursPage from "./pages/ColoursPage/ColoursPage.tsx";
import QuizPage from "./pages/QuizPage/QuizPage.tsx";
import { fetchColours, fetchQuestions } from "./services/loader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/quiz",
        element: <QuizPage />,
        loader: fetchQuestions,
      },
      {
        path: "/couleurs",
        element: <ColoursPage />,
        loader: fetchColours,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
