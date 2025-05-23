import TabContent from './TabContent'

function Tabs({ activeTab, setActiveTab, data, selectedItem, setSelectedItem }) {
  const tabKeys = Object.keys(data)

  return (
    <>
      <div className="tabs">
        {tabKeys.map(tabKey => (
          <button
            key={tabKey}
            className={`tab-btn ${activeTab === tabKey ? 'active' : ''}`}
            onClick={() => setActiveTab(tabKey)}
          >
            {`(${tabKeys.indexOf(tabKey) + 1}) ${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}`}
          </button>
        ))}
      </div>

      {tabKeys.map(tabKey => (
        <TabContent
          key={tabKey}
          tabKey={tabKey}
          items={data[tabKey]}
          activeTab={activeTab}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </>
  )
}

export default Tabs