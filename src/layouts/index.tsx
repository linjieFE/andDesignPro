import React, { ReactNode } from 'react';
interface IProps{
    children?: ReactNode
}
function Layout(props:IProps){
    return (
        <>
            {props?.children}
        </>
    )
}
export default Layout
