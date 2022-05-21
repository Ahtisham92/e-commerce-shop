import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'


const Rating = ({value, text, color }) => {

  console.log(value)
  return (
    <div>
      <span>
        <i style={{color}}
          className={value >= 1? 'fa-solid fa-star' : 
          value >= 0.5? 'fa-solid fa-star-half-stroke' :
          'far fa-star'
        }
        ></i>
      </span>
      
      <span>
        <i style={{color}}
          className={value >= 2? 'fa-solid fa-star' : 
          value >= 1.5? 'fa-solid fa-star-half-stroke' :
          'far fa-star'
        }
        ></i>
      </span>
      
      <span>
        <i style={{color}}
          className={value >= 3? 'fa-solid fa-star' : 
          value >= 2.5? 'fa-solid fa-star-half-stroke' :
          'far fa-star'
        }
        ></i>
      </span>
      
      <span>
        <i style={{color}}
          className={value >= 4? 'fa-solid fa-star' : 
          value >= 3.5? 'fa-solid fa-star-half-stroke' :
          'far fa-star'
        }
        ></i>
      </span>
      
      <span>
        <i style={{color}}
          className={value >= 5? 'fa-solid fa-star' : 
          value >= 4.5? 'fa-solid fa-star-half-stroke' :
          'far fa-star'
        }
        ></i>
      </span>

      <span>
        {text}
      </span>

    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825'
}

Rating.propTypes = {
  value: propTypes.number.required,
  text: propTypes.string.required,
  color: propTypes.string,
}

export default Rating
