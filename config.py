import platform
import os

ROOT = os.path.normpath(os.path.dirname(__file__))

CAMERA_URL = {
    'url' : [
        'http://119.2.50.116:83/mjpg/video.mjpg?camera=1&timestamp=1617707000118',
        'rtsp://root:halotec@192.168.0.11/axis-media/media.amp',
        'http://192.168.0.11:9080/mjpg/video.mjpg'
    ]
}

RESOLUTIONS = {
    'high': (1280, 720),
    'medium': (640, 480),
    'low': (320, 240)
}

PORT = 8002