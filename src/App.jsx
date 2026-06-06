// /src/App.jsx

import './App.css'

import AppRouter from './routes/AppRouter';

import { Provider } from 'react-redux';

import {store} from './app/store'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
