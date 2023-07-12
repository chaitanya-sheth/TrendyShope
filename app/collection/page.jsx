import React from 'react'
import '../../styles/desktop.css';
import '../../styles/tab.css';
import '../../styles/mobile.css';
import Link from 'next/link';

const page = () => {
  return (
    <div className='categoryPage'>
    <Link className='categoryLinkTag' href='/collection/haircare'><img href='/collection/haircare' src='/category1.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/collection/skincare'><img src='/category2.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/collection/laundary-dishwash'><img src='/category3.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/collection/hand-bodywash'><img src='/category4.jpg' className='categoryImages'></img></Link>
    <Link className='categoryLinkTag' href='/collection/food-and-beverages'><img src='/category5.jpg' className='categoryImages'></img></Link>
    </div>
  )
}

export default page