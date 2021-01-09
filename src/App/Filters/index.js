import { useState } from 'react'
import SlideModal from 'Components/SlideModal'

const Filters = () => {
  const [open, setOpen] = useState(false)
  const openFilters = ev => {
    ev.preventDefault()
    setOpen(true)
  }
  return (
    <header className='filters'>
      <a href='/tickers' onClick={openFilters}>
        Tickers
      </a>
      {open && (
        <SlideModal title='Tickers' onClose={() => setOpen(false)}>
          Filters
        </SlideModal>
      )}
    </header>
  )
}

export default Filters
