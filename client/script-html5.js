// client/script-html5.js

function startQrScanner() {
    const html5QrCode = new Html5Qrcode("reader");

    // Настройка QR-сканера
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode.start(
        { facingMode: "environment" },
        config,
        (decodedText, decodedResult) => {
            console.log(`Scanned QR Code: ${decodedText}`);
            window.location.href = decodedText;
        },
        (errorMessage) => {
            console.warn(`Error scanning: ${errorMessage}`);
        }
    ).catch((err) => {
        console.error(`Unable to start scanning: ${err}`);
    });
}
