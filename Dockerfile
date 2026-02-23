# DIENBIEN MOD - Server nhạc Zing MP3 chạy trên Armbian
#=======================================================
FROM python:3.10
RUN apt-get update && apt-get install -y ffmpeg && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app.py"]

# End - DIENBIEN MOD - Server nhạc Zing MP3 chạy trên Armbian
#============================================================