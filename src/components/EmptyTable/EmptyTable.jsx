import { EmptyTitle, TbodyEmptyWrapper, TbodyEmptyContainer } from './EmptyTableStyles'

const EmptyTable = ({ description }) => {
  return (
    <TbodyEmptyWrapper>
      <TbodyEmptyContainer>
        <EmptyTitle>No se han añadido productos {description}</EmptyTitle>
      </TbodyEmptyContainer>
    </TbodyEmptyWrapper>
  )
}

export default EmptyTable
