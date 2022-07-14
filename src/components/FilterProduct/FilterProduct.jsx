import { FilterContainer, FilterSlider, Price, Title, useStyles } from './FilterProductStyles'

const FilterProduct = ({ value, changedPrice }) => {
  const classes = useStyles()
  return (
    <>
    <Title>Filtrar Producto</Title>
    <FilterContainer>
    <FilterSlider
    value={value}
    onChange={changedPrice}
    valueLabelDisplay='on'
    step={90}
    min={10}
    max={1000}
    classes={{
      thumb: classes.thumb,
      rail: classes.rail,
      track: classes.track
    }}
    />
    </FilterContainer>
    <Price >Precio: S/10.00 - S/1000.00</Price>
    </>
  )
}

export default FilterProduct
