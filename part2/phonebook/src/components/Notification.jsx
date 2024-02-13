const Notification = ({message}) => {
    const notificationStyle = {
        color: "green",
        background: "lightgray",
        fontSize: 20,
        padding: 10,
        borderStyle: "solid",
        borderRadius: 5,
        BorderColor: "green",
        marginBottom: 10
    }
    if(message === null) {
        return null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification