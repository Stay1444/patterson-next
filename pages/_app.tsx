import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

import style from "./_app.module.sass"
import Header from "@/components/Header"
import { CartContextProvider } from "@/context/CartContext"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }
   
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
   

const MainLayout = ({Component, pageProps}: AppPropsWithLayout) => {
    return (
        <div className={style.app}>
            <CartContextProvider>
                <div className={style.parent}>
                    <div className={style.header}>
                        <Header/>
                    </div>
                    <div className={style.content}>
                        <Component {...pageProps}/>
                    </div>
                </div>
            </CartContextProvider>
        </div>
        
    )
}

export default MainLayout;