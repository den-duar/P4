import Adicao from './components/Adicao';
import Subtracao from './components/Subtracao';
import Multiplicacao from './components/Multiplicacao';
import Divisao from './components/Divisao';
import PrecisoEstudar from './components/PrecisoEstudar';

function App() {
  return (
    <div>
      <Adicao num1 = {3} num2 = {2}/>
      <Subtracao num1 = {3} num2 = {2}/>
      <Multiplicacao num1 = {3} num2 = {2}/>
      <Divisao num1 = {3} num2 = {2}/>
      
      <PrecisoEstudar tecnologia = "React" />
    </div>
  );
}

export default App;
