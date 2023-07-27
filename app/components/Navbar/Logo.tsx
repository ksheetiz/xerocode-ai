'use client'

import Image from "next/image"

function Logo () {
    return(
        <Image src="/images/logo.png" alt="Logo" className="md:block cursor-pointer" height="60" width="60" />
    )
}

export default Logo;