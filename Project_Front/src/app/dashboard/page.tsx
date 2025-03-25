
'use client'
import {FC} from "react"

import Link from "next/link"
import Menu from "./Menu"
import Header from "~/components/Header/Header"
import Footer from "~/components/footer/footer"

interface dashboardProps {}

const dashboard:FC<dashboardProps> =({})=>{


    return (
        <>
          <Header />
          <h2 className="text-md w-80 my-12 font-semibold mb-12 rounded-3xl bg-gray-400 text-white text-center px-7 py-2 max-w-screen-lg mx-auto">
            Setup your service
          </h2>
          <Menu />
          <div className='flex w-full items-center justify-center font-medium mx-auto my-8'>
            <Link className='p-2 bg-gray-100 text-sm text-center bg-red-300 rounded-3xl mr-8' href="/dashboard/opening">
              Opening hours<br />
              <span className="font-bold">click here to continue</span>
            </Link>
            <Link className='p-2 bg-gray-100 text-sm text-center rounded-3xl' href='/dashboard/menu'>
              Menu <br />page under construction
            </Link>
            {/* Assuming `Menu` is a component */}
            <div className="mb-6">
            
            </div>
          </div>
          <Footer />
        </>
      );
      
}

export default dashboard