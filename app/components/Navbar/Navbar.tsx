'use client'

import Button from "../Button"
import Container from "../Container"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="fixed opacity-80 w-full bg-black z-10 shadow-lg">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo/>
                    <div>
                        <Button label="XEROCODEE" onClick={()=>{}} outline/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar