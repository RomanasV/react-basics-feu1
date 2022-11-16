import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import SectionHeader from './components/SectionHeader/SectionHeader';

function App() {
  const personName = 'John';

  return (
    <div className="Container">
      <SectionHeader personName={personName} personSurname="Doe" paragraph="Welcome to my React page"></SectionHeader>
      <CustomButton text="Kitas tekstas"></CustomButton>
      <CustomButton text="Click"></CustomButton>
    </div>
  );
}

export default App;
