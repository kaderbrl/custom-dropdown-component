import Dropdown from './components/Dropdown';
import data from './data.json';

function App() {
  const handleSelect = (id: string) => {
    console.log(`Selected item with id ${id}`);
  };

  return (
    <Dropdown
      id='person'
      title='Select Person'
      data={data}
      hasImage
      onSelect={handleSelect}
    />
  );
}

export default App;
