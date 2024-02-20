import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./Components/Ui/Layout";
import { Posts } from "./routes/posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
    ],
  },
]);

function App() {
  return (
    <MantineProvider forceColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
