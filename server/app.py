# server/app.py

from flask import Flask, jsonify, request, send_file
import qrcode
import io
import os
from datetime import datetime

app = Flask(__name__)

# Маршрут для генерации QR-кода для подключения к конференции
@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    data = request.json
    if not data or 'conference_url' not in data:
        return jsonify({'error': 'Missing conference URL'}), 400

    conference_url = data['conference_url']

    # Генерация QR-кода
    img = qrcode.make(conference_url)
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)

    filename = f"qr_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
    
    return send_file(buffer, mimetype='image/png', as_attachment=True, download_name=filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
