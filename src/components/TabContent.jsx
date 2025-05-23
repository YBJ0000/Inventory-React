import ItemList from './ItemList'

function TabContent({ tabKey, items, activeTab, selectedItem, setSelectedItem }) {
  const isActive = tabKey === activeTab

  return (
    <div className={`tab-content ${isActive ? 'active' : ''}`} data-count={items.length}>
      {isActive && (
        <ItemList
          items={items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  )
}

export default TabContent
