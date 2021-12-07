import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
const App = lazy(() => import('./App'));

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<div></div>} persistor={persistor}>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
