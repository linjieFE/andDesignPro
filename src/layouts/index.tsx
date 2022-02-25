import React, { ReactNode } from 'react';
interface IProps{
    children?:ReactNode
}
function Layout({children}:IProps){
    return (
        <div style={{color:'red'}}>
            {children}
        </div>
    )
}
export default Layout
