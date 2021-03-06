import { cloneElement, ReactElement } from "react"

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

interface IProps extends LinkProps {
    children: ReactElement,
    activeClassName?: string
}

function ActiveLink({children, activeClassName, ...rest}: IProps){

    const { asPath } = useRouter();

    const className = asPath === rest.href? activeClassName : '';
    
    return(
        <Link {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
        
    )
}



export {ActiveLink}