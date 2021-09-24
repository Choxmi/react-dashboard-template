import React from 'react';
import { Route,Switch,BrowserRouter } from "react-router-dom";
import ScreeningRecordInput from './routes/screeningRecordInput';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <ScreeningRecordInput/>
        </Route>
        <Route path="*">
            <ScreeningRecordInput/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;