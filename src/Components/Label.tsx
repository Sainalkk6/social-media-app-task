import { LabelPropsType } from "../Types/types";



export const Label = ({labelFor,label}:LabelPropsType) => <label className="font-mono text-lg" htmlFor={labelFor}>{label}</label>
