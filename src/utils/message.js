//format message input
function formatMessage(username, msg){
    const now = new Date();
    return {
        username,
        msg,
        time: `${now.getHours()} : ${now.getMinutes()}`
    }
}

export {formatMessage}