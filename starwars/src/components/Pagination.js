import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const PaginationNav = (props) => {
  return(
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>

      <PaginationItem onClick={ props.setPage.bind(null, props.getCharacterPage(1)) }>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={ props.setPage.bind(null, props.getCharacterPage(2)) }>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={ props.setPage.bind(null, props.getCharacterPage(3)) }>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={ props.setPage.bind(null, props.getCharacterPage(4)) }>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={ props.setPage.bind(null, props.getCharacterPage(5)) }>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink next href="#" onClick={ props.setPage.bind(null, + 1) } />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  )
}



export default PaginationNav