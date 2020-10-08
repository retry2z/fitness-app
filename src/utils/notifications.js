const initializationNotification = async () => {
    console.log('s');
    if (!("Notification" in window) || Notification.permission !== 'default') {
        return
    }

    return await Notification.requestPermission();
}

const pushNotification = (text, options) => {
    if (Notification.permission === 'denied') {
        return
    }

    const data = {
        body: 'Successful',
        icon: 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/7365665041556281661-512.png',
        ...options
    }

    new Notification(text, data);
}

export {
    initializationNotification,
    pushNotification
}