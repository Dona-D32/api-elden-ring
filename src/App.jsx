import './App.css';
import Creatures from './components/Creatures';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Creatures />
      <ReactQueryDevtoolsPanel isOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
