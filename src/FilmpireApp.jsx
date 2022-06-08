import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import store from './app/store';

export const FilmpireApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
