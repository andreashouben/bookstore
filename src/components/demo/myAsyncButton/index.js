import {useState} from "react";

const MyAsyncButton = ({text}) => {
    const [buttonText, setButtonText] = useState(text)


    const fetchNewText = async () =>{
        const response = await fetch("/text");
        const newText = await response.text()
        setButtonText(newText)
    }


    return (
        <button onClick={() => fetchNewText()}>{buttonText}</button>
    )
}

export default MyAsyncButton