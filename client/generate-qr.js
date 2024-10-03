// client/generate-qr.js

// Функция для отправки POST-запроса и получения QR-кода
function generateQrCode(conferenceUrl) {
    fetch('http://localhost:5000/generate_qr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "conference_url": conferenceUrl })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        // Создаем ссылку на загруженный файл и инициируем его скачивание
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qr_code.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
    })
    .catch(error => console.error('Error:', error));
}

// вызов функции generateQrCode
generateQrCode("http://conference-link.com");
