# server/device_recognition.py

from flask import Flask, jsonify, request
from datetime import datetime
import json

app = Flask(__name__)

# Список подключений с расписанием
scheduled_connections = [
    {
        "device_id": "user-device-001",
        "room_id": "room-101",
        "scheduled_time": "2024-10-02T14:00:00"
    },
    {
        "device_id": "user-device-002",
        "room_id": "room-102",
        "scheduled_time": "2024-10-02T15:00:00"
    }
]

@app.route('/recognize_device', methods=['POST'])
def recognize_device():
    data = request.json
    if not data or 'device_id' not in data:
        return jsonify({'error': 'Missing device ID'}), 400

    device_id = data['device_id']

    # Определяем текущее время для проверки
    current_time = datetime.now().isoformat()

    # Проверяем наличие подключения по расписанию
    for connection in scheduled_connections:
        if connection["device_id"] == device_id and connection["scheduled_time"] <= current_time:
            return jsonify({
                "message": f"Device {device_id} is automatically connected to room {connection['room_id']}."
            }), 200

    return jsonify({'message': f"No scheduled connection found for device {device_id} at the current time.'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
