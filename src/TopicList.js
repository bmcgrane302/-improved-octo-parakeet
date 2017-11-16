import React from 'react'

const TopicList = (props) => {
  let listOfTopics = props.topics.map((topic, index) => <li key={index}>{topic}</li>)
  return (
    <div>
      <h2>List of topics</h2>
      <ul>
        {listOfTopics}
      </ul>
    </div>
  )
}

export default TopicList
