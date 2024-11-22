import { QueryClientProvider } from 'react-query';
import { Router } from './router/routes';
import { queryClient } from './service/index';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;