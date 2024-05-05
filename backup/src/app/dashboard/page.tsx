
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
          <h2 className="text-md w-80 my-8 font-semibold mb-12 rounded-3xl bg-gray-400 text-white text-center px-7 py-2 max-w-screen-lg mx-auto">
            Setup your service
          </h2>
          <div className='flex flex-col h-screen w-full items-center justify-center gap-8 font-medium mb-12 mx-4'>
            <Link className='mt-40 p-2 bg-gray-100 text-sm text-center bg-red-300 rounded-3xl' href="/dashboard/opening">
              Opening hours<br />
              <span className="font-bold">click here to continue</span>
            </Link>
            <Link className='p-2 bg-gray-100 text-sm text-center rounded-3xl' href='/dashboard/menu'>
              Menu <br />page under construction
            </Link>
            {/* Assuming `Menu` is a component */}
            <div className="mb-60">
            <Menu />
            </div>
          </div>
          <Footer />
        </>
      );
      
}

export default dashboard