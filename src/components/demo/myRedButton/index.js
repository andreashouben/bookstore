import {useState} from "react";

const MyRedButton = ({text}) => {

    const [isRed, setRed] = useState(false)

    const turnRed = () => {
        setRed(true)
    }

    return (
        <button style={{backgroundColor: isRed ? 'red' : 'inherit'}} onClick={() => turnRed()}>{text}</button>
    )
}

export default MyRedButton