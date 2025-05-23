import { useState } from 'react'
import Tabs from './components/Tabs'

const data = {
  vegetables: ['Carrot', 'Cucumber'],
  spices: ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'],
  fruits: ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry']
}

function App() {
  const [activeTab, setActiveTab] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <h1>Inventory</h1>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        data={data}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </>
  )
}

export default App
