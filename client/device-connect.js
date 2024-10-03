// client/device-connect.js

function startDeviceAutoConnect() {
    const deviceId = "user-device-001"; // В реальной реализации это могло бы определяться динамически

    fetch('http://localhost:5001/recognize_device', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "device_id": deviceId })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Отобразить сообщение о подключении на странице
        const messageDiv = document.getElementById("connection-status");
        messageDiv.innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}
