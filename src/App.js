import './App.css';
import ControlledInput from './ControlledInput';
import FormById from './FormById';
import FormByIndex from './FormByIndex';
import FormByRef from './FormByRef';
import PreventUpperCase from './PreventUpperCase';

function App() {
  const idOfElement = (inputName) => {
    alert(inputName);
  }

  return (
    <div>
      <ControlledInput />
      <FormById idOfElement={idOfElement}/>
      <FormByIndex idOfElement={idOfElement}/>
      <FormByRef idOfElement={idOfElement}/>
      <PreventUpperCase />
    </div>
  );
}

export default App;
