import { EmptyTitle, TbodyEmptyWrapper } from './EmptyTableStyles'

const EmptyTable = ({ description }) => {
  return (
    <TbodyEmptyWrapper>
      <EmptyTitle>No se han añadido productos {description}</EmptyTitle>
    </TbodyEmptyWrapper>
  )
}

export default EmptyTable
