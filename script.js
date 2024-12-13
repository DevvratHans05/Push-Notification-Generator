document.addEventListener('DOMContentLoaded', () => {
    const requestPermissionButton = document.getElementById('requestPermission');
    const sendNotificationButton = document.getElementById('sendNotification');
    const timerNotificationButton = document.getElementById('timerNotification');
    const notificationTitleInput = document.getElementById('notificationTitle');
    const notificationMessageInput = document.getElementById('notificationMessage');

    // Request Notification Permission
    requestPermissionButton.addEventListener('click', () => {
        if (Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    alert('Notification permission granted!');
                } else {
                    alert('Notification permission denied.');
                }
            });
        } else if (Notification.permission === 'granted') {
            alert('Notification permission already granted!');
        } else {
            alert('Notification permission was denied previously.');
        }
    });

    // Send Custom Notification
    sendNotificationButton.addEventListener('click', () => {
        const title = notificationTitleInput.value.trim();
        const message = notificationMessageInput.value.trim();
        
        if (title && message) {
            new Notification(title, { body: message });
            alert(`${title}\n${message}`);; 
        } else {
            alert('Please enter both title and message.');
        }
    });

    // Send Notification after 5 seconds
    timerNotificationButton.addEventListener('click', () => {
        const title = notificationTitleInput.value.trim();
        const message = notificationMessageInput.value.trim();

        if (title && message) {
            setTimeout(() => {
                new Notification(title, { body: message });
                alert(`${title}\n${message}`); 
            }, 5000);
            console.log('Notification will be sent in 5 seconds.');
        } else {
            alert('Please enter both title and message.');
        }
    });
});