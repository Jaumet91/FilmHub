import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './app/store';

export const FilmpireApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
