
import './PricingCardStyles.css';
import React from 'react'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
               
                <span className='bar'></span>
                <h2>TextUtiles-App</h2>
                <p>- React -</p>
                <p>- 2 page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
               

            </div>
            <div className='card'>
               
                <span className='bar'></span>
                <h2>Quize-Game</h2>
                <p>- React -</p>
                <p>- 1 page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
              

            </div>
            <div className='card'>
              
                <span className='bar'></span>
                <h2>Wheather-Report-App</h2>
                <p>- Javascript -</p>
                <p>- 1 page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
               

            </div>
        </div>
      
    </div>
  )
}

export default PricingCard
