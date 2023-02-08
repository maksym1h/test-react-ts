import run from './Scrapper.ts'

function GenerateData() {
  const handleClick = () => {
    run()
  }

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Scrap!
      </button>
    </div>
  )
}

export default GenerateData
