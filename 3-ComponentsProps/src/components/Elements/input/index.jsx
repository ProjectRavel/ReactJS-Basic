import LabelLogin from "./label"
import InputLogin from "./input";

const IndexForm = ({text,placeholder,type,id, forHTML}) => {
   return <div className="mb-6">
                <LabelLogin text={`${text}`} variant={`${forHTML}`} />
                <InputLogin placeholder={`${placeholder}`} type={`${type}`} id={`${id}`}/>
            </div>
}

export default IndexForm