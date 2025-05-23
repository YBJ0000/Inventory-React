function ItemList({ items, selectedItem, setSelectedItem }) {
  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null)
    } else {
      setSelectedItem(item)
    }
  }

  return (
    <ul>
      {items.map(item => (
        <li
          key={item}
          className={selectedItem === item ? 'selected' : ''}
          onClick={() => handleClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ItemList