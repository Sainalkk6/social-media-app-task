import { InputPropType } from "../Types/types";



export const Input = ({placeholder,type,value,handleChange , id}:InputPropType) => <input className="text-lg ml-4 border mb-5 pl-5 focus:outline-none" id={id} type={type} onChange={handleChange} placeholder={placeholder} value={value} />
