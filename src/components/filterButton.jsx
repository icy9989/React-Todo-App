import React from 'react'

const FilterButton = ({ text, btnColor, btnText, onFilter }) => {
    const styles = {
        buttons: {
            backgroundColor: btnColor,
            color: btnText,
        }
    }

  return (
    <div className='d-grid'>
        <button className='btn' style={styles.buttons} onClick={() => onFilter(text)}>{text}</button>
    </div>  
  )
}

export default FilterButton