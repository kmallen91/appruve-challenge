import React, {useContext, useState} from 'react'
import './pricing.css'
import { pricingContext } from './pricingContext'

export default function Pricing (props) {
    const {tier, setTier} = useContext(pricingContext)
    const [selected, setSelected] = useState()
    const setBronze = e => {
        setTier({ 'bronze': true})
        setSelected('bronze')
        localStorage.setItem(tier, 'bronze')
    }
    const setSilver= e => {
        setTier({ 'silver': true})
        setSelected('silver')
        localStorage.setItem(tier, 'silver')
    }
    const setGold = e => {
        setTier({ 'gold': true})
        setSelected('gold')
        localStorage.setItem(tier, 'gold')
    }

    return (
        <div className='pricing'>
            <h2>Please select the pricing plan you would like:</h2>
            <div className='pricing-container'>
                <div className={ selected ==='bronze' ? 'active': 'tier-container'} onClick={setBronze}>Bronze Plan: $5/month</div>
                <div className={ selected === 'silver' ? 'active': 'tier-container'} onClick={setSilver}>Silver Plan: $10/month</div>
                <div className={ selected === 'gold' ? 'active': 'tier-container'} onClick={ setGold }>Gold Plan: $15/month</div>
            </div>
        </div>
    )
}