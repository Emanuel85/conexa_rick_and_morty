import React from 'react'

const PanelEpisodes = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-white p-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Character #1 – Only Episodes</h3>
            <ul className="list-disc list-inside">EPISODES CHARACTER 1</ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Character #1 & #2 – Shared Episodes</h3>
            <ul className="list-disc list-inside">EPISODES CHARACTER 1 AND CHARACTER 2</ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Character #2 – Only Episodes</h3>
            <ul className="list-disc list-inside">EPISODES CHARACTER 2</ul>
          </div>
        </div>
      )
}

export default PanelEpisodes