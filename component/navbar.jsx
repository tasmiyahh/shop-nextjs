import React from 'react'

import Link from 'next/link'

function Navbar() {
  return (
   <>
   <h1 className='logo' >
     ONE $ SHOP
   </h1>
   <ul className='ul'>
    <li>
        <Link href={"/"}>
         home
        </Link>
    </li>
    <li>
        <Link href={"/products"}>
         products
        </Link>
    </li>
    <li>
        <Link href={"/aboutus"}>
         ABOUT
        </Link>
    </li>
   </ul>
   </>
  )
}

export default Navbar