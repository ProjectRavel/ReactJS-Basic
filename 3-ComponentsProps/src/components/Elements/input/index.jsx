import LabelLogin from "./label"
import InputLogin from "./input";
import {forwardRef} from "react";

const IndexForm = forwardRef(({text,placeholder,type,id, forHTML}, ref) => {
    return <div className="mb-6">
                 <LabelLogin text={`${text}`} variant={`${forHTML}`} />
                 <InputLogin ref={ref} placeholder={`${placeholder}`} type={`${type}`} id={`${id}`}/>
             </div>
 })

IndexForm.displayName = "IndexForm"

export default IndexForm