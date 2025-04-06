import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/menu';
import { ROUTE_COMPONENT } from './routes/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {routes.map((item) => {
          const Component = ROUTE_COMPONENT[item.key];
          return (
            <Route
              path={item.path}
              key={item.key}
              element={<Component />}
            />
          );
        })}
      </Route>
    </Routes>
  </BrowserRouter>

)
