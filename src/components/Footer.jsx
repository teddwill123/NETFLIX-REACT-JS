import React from 'react'
import instagram from "../assets/images/instagram_icon.png"
import facebook from "../assets/images/facebook_icon.png"
import twitter from "../assets/images/twitter_icon.png"
import youtube from "../assets/images/youtube_icon.png"

const Footer = () => {
  return (
    <div className='w-full p-4 m-auto'>
        <div className='flex items-center justify-between gap-[20px] w-10 m-[40px] cursor-pointer'>
            <img className='w[30px]' src={instagram} alt='' />
            <img className='w[30px]' src={facebook} alt='' />
            <img className='w[30px]' src={twitter} alt='' />
            <img className='w[30px]' src={youtube} alt='' />
        </div>
        <ul className='grid lg:grid-cols-4 gap-4 mb-2 list-none text-white sm:grid-cols-2 sm:items-center'>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Card</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Investor</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Job</li>
        </ul>
        <p className='text-gray-500 font-bold text-center p-4 mt-8'>1997-2003 Netflix, Inc</p>
    </div>
  )
}

export default Footer
