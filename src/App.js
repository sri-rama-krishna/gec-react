
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import Props from './components/Props';
import State from './components/State';
import PropsState from './components/PropsState';
import ButtonEvent from './components/ButtonEvent';
import StyleSheets from './components/StyleSheets';
import InlineStyle from './components/InlineStyle';
import ModuleStyle from './components/ModuleStyle';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <FunctionComponent />
      <ClassComponent />
      <Props name="property" />
      <State />
      <PropsState name="from props state" />
      <ButtonEvent />
      <StyleSheets />
      <InlineStyle />
      <ModuleStyle />
      <Login />
    </div>
  );
}

export default App;
