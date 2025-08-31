import type { ReactElement } from "react";

interface ButtonInterface{
    Variant: 'primary' | 'secondary'
    title: string;
    size: 'sm' | 'md' | 'lg';
    startIcon?: ReactElement;
    endIcon?: ReactElement;
}


const VariantStyle={
    'primary':'bg-purple-600 text-white',
    'secondary':'bg-purple-400 text-purple-600'
}
//
const sizeStyle={
    'sm': "py-1 px-2 text-sm rounded-sm",
    'md': "py-2 px-4 text-md rounded-md",
    'lg': "py-4 px-6 text-lg rounded-lg"
}

const defaultStyle = ""

export function Button(props: ButtonInterface) {
    return <button className={`${VariantStyle[props.Variant]}  ${sizeStyle[props.size]}  ${defaultStyle}`}>

        <div className="flex items-center">
        {props.startIcon} 
        <div className="pl-2 pr-2">{props.title}</div> {props.endIcon}
        </div>

    </button>
    
}