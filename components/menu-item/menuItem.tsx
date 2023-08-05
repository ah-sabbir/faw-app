import { Menu } from '@headlessui/react'
import React from 'react'

interface Props{
    classNames?: string,
    children?: React.ReactNode,
    key?: string,
    value?: string,
    onClick?: () => void,
    href?: string,
    active?: boolean,
    icon?: React.ReactNode,
    freeze?: true | false,
    as ?: any
}

const menuItem = (props:Props) => {
   return (props.freeze && (      
   
   <Menu.Item
    as="span"
    disabled
    className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
  >
    {props.value}
  </Menu.Item>) || (
    <Menu.Item
    as={props.as}
    className={`${props.classNames} ${props.active ? 'bg-orange-100 text-orange-500' : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'}`}
    key={props.key}
    value={props.value}
    onClick={props.onClick}
    href={props.href}
    >
        {props.icon && <div className="mr-2">
            {props.icon}
        </div>}
        <div>
            {props.children}
        </div>
    </Menu.Item>
    ))
    
}



export default menuItem
