import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from './src/Navigation/StackNavigation/index'

import React, { useEffect } from "react";

import { PersistGate } from "redux-persist/integration/react";
import { Store } from "./src/Redux/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

let persistor = persistStore(Store)

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>

  )
}
export default App
