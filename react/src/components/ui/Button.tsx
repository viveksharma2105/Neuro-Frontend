 
 interface ButtonProprs {
    varient: 'primary' | 'secondary';
    size: 'sm' |  'md' | 'lg';
    text: string;
    startIcon?:any;
    endIcon?:any;
    onClick: ()=>void;
}


const varientStyle={
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}
const defaultStyle="rounded-md flex";

const sizeStyle={
    'sm':"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6",
}

export const  Button = (props:ButtonProprs) => {

    return <button className={`${varientStyle[props.varient]} ${defaultStyle} ${sizeStyle[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null} {props.text} {props.endIcon}</button>

}

<Button varient="primary" size="md" onClick={()=>{}} text={"asd"} />
