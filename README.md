# Push Notification Generator

This is a simple web application that allows users to generate push notifications directly from their browser. Users can request notification permissions, send notifications instantly, or schedule them to be sent after 5 seconds.

## Features

- Request browser notification permissions.
- Send a custom notification immediately.
- Schedule a custom notification to be sent after 5 seconds.

## Demo

<img width="1440" alt="Screenshot 2024-12-13 at 7 54 54 AM" src="https://github.com/user-attachments/assets/3f559c36-4fd7-4a36-8070-39a2db03a350" />

## Prerequisites

- A modern browser with support for the [Web Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/push-notification-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd push-notification-generator
   ```

3. Open `index.html` in your browser:

   ```bash
   open index.html
   ```

## Files

- `index.html`: The main HTML structure of the app.
- `styles.css`: The CSS file for styling the app.
- `script.js`: The JavaScript file containing the logic for handling notifications.

## Usage

1. Open the app in a compatible browser.
2. Click **Request Notification Permission** to allow the browser to send notifications.
3. Enter a title and message for the notification.
4. Use the following buttons:
   - **Send Notification**: Sends the notification immediately.
   - **Send Notification in 5 seconds**: Schedules the notification to be sent after 5 seconds.

## Code Overview

### HTML (`index.html`)
- Provides the structure of the app, including input fields and buttons.

### CSS (`styles.css`)
- Styles the app, making it user-friendly and visually appealing.

### JavaScript (`script.js`)
- Handles the logic for requesting notification permissions and sending notifications.

## Browser Compatibility

This app relies on the Web Notifications API, which is supported by most modern browsers. Ensure that your browser allows notifications for the best experience.

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

Feel free to contribute to this project by submitting issues or pull requests! 😊
