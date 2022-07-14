import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './styles/globalStyles'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>
)
