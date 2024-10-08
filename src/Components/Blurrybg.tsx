import { BlurryComponentPropType } from "../Types/types";


export const Blurrybg = ({removeBlur}:BlurryComponentPropType) => <div className="absolute w-full h-full bg-white/30 z-20 backdrop-blur-sm transition duration-300" onClick={()=> removeBlur(false)}></div>