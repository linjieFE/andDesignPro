import React, { ReactNode } from 'react';
interface IProps{
    children?:ReactNode
}
function Layout({children}:IProps){
    return (
        <>
            {children}
        </>
    )
}
export default Layout
