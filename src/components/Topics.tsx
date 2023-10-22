type TopicsType = {
  style?: string
}
const Topics = ({style}: TopicsType) => {

  const styles = `flex w-full items-center space-x-4 ${style}`

  const renderTopics = 
    <div className={styles}>
      {/* topics */}
      <h2 className="text-md font-thin">My topics</h2>
      {/* tags */}
      <div className="flex space-x-2 items-center">
        {
          Array.from({length: 4}).map((_,i) => (
            <div 
              key={i}
              className="bg-slate-200 px-4 py-1 rounded-md">tag{i}</div>
          ))
        }
      </div>
    </div>

  return renderTopics
}

export default Topics;