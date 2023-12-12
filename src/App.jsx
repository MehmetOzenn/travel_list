import { useState } from 'react'
import './App.css'
import Stats from './Stats';
import PackingList from './PackingList';
import Form from './Form';
import Logo from './Logo';


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems)

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id !== id));
  }

  function handleAddItems(item){
    setItems((items)=>[...items, item])
  }

  function handleToggleItem(id){
    setItems((items)=>items.map((item)=> item.id === id ? {...item, packed:!item.packed} : item))
  }
  function clearList(){

    const confirmed = window.confirm('Do you wanna delete everything ? 🧐')

    if(confirmed) setItems([])
  }

  return (
    <>
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={clearList}/>
      <Stats items={items}/>
    </>
  )
}
export default App
