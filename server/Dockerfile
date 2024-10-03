# server/Dockerfile

FROM python:3.10-slim
WORKDIR /app

# Установка зависимостей
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Копирование исходного кода
COPY app.py .

# Запуск приложения
CMD ["python", "app.py"]
