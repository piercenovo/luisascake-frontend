import { useState } from "react"

export const useHandleQuantity = () => {

  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  return {quantity, handleQuantity}
}
