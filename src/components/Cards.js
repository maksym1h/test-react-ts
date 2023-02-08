import React from 'react'
import Card from './Card'
import data from '../data/data'
import Pagination from './Pagination'

function Cards() {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [cardsPerPage] = React.useState(50)
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="cards">
      {currentCards.map((card) => {
        return <Card key={card.id} {...card} />
      })}
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Cards
