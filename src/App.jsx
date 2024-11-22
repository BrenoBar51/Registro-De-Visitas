import { QueryClientProvider } from "react-query";
import { Paths } from "./router/routes";
import { queryClient } from "./service/index";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>
    </>
  );
}

export default App;