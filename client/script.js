// client/script.js

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
        const video = document.getElementById("preview");
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // Safari для iOS требование
        video.play();

        const qrScanner = new QrScanner(video, function(result) {
            console.log("QR Code Scanned:", result);
            window.location.href = result;
        });

        qrScanner.start();
    })
    .catch(function(err) {
        console.error("Error accessing camera: ", err);
    });
