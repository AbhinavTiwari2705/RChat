import React, { useRef, useState } from 'react'
import useAutosizeTextArea from "./utils/useAutosizeTextArea";

const TileComponent = ({
    pathAddress,
    commandHistory,
    setCommandHistory,
    outputHistory,
    setOutputHistory,
}) => {
    const [command, setCommand] = useState("")
    const textAreaRef = useRef(null);
    useAutosizeTextArea(textAreaRef.current, command);

    const onEnterPress = (event) => {
        if (event.keyCode === 13 && event.shiftKey === false) { 
            event.preventDefault();
            setCommandHistory([...commandHistory, command])
            setOutputHistory([...outputHistory, command])
            setCommand("")
        }
    }

    return (
        <div>
            {/* New Terminal input */}
            <div style={styles.horizontalFlex}>
                <p style={{color: '#fff'}}>{pathAddress}{' > '} </p>
                <textarea 
                    style={styles.inputStyle} 
                    type="text"  
                    value={command} 
                    onChange={(event) => {
                        setCommand(event.target.value)
                    }} 
                    onKeyDown={onEnterPress} 
                    rows={1}
                    ref={textAreaRef}
                />
            </div>
        </div>
    )
}

export default TileComponent

const styles = {
    horizontalFlex: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputStyle: {
        borderStyle: 'none',
        flex: 1,
        outline: 'none',
        background: 'transparent',
        color: '#fff',
        marginLeft: '10px',
        marginTop: '12px',
        resize: 'none',
        height: 'auto',
        flexGrow: 1,
    }
}