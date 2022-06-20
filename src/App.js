import './App.css';
import Dropdown from './components/Dropdown';
import React from 'react';
function App() {
  const [selectVariant, setSelectVariant] = React.useState('variant1')
  
  const config = {
    type: selectVariant,
    image: "https://media.tproger.ru/uploads/2021/03/iconfinder_Google_1298745-cover-icon-original.png",
    placeholder: "Placeholder",
    options: ["Variant1", "variant2", "variant3", "variant4"],
    descriptionOption: "Best for business owners and company administrators"
  }

  return (
    <div className="App">
      <p>Dropdown name</p>
      <Dropdown config={config} />
      <select className='select' onChange={({ target: { value } }) => setSelectVariant(value)}>
        <option value="variant1">variant1</option>
        <option value="variant2">variant2</option>
        <option value="variant3">variant3</option>
        <option value="variant4">variant4</option>
      </select>
    </div>
  );
}

export default App;
