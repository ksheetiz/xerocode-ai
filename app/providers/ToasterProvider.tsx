'use client'

import { Toaster } from "react-hot-toast"

const ToasterProvider = () =>{
    return(
        <Toaster toastOptions={{
            success : {
                style : {
                    background : 'indigo',
                    color : 'white'
                }
            },
            error : {
                style : {
                    background : 'maroon',
                    color : 'whitesmoke'
                }
            }
        }}/>
    )
}

export default ToasterProvider;