import React from 'react'

const HistoryComponent = ({
    pathAddress,
    commandHistory,
    outputHistory,
}) => {

    const result = []
    console.log(commandHistory)
    console.log(outputHistory)
    for (let i = 0; i < commandHistory.length; i++) {
        result.push(
            <div>
                {/* Terminal input */}
                <div style={styles.horizontalFlex}>
                    <p style={{ color: '#fff' }}>{pathAddress}{' > '} </p>
                    <textarea
                        style={styles.inputStyle}
                        type="text"
                        value={commandHistory[i]}
                        rows={1}
                    />
                </div>
                {/* Terminal output */}
                <p>{outputHistory[i]}</p>
            </div>
        )
    }
    return (
        <div>
            {result}
        </div>
    )
}

export default HistoryComponent


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