# # -*- coding: utf-8 -*-
# """
# Created on Tuesday 5/11/2022

# @author: Sachin Kumar Mohanty
# """
import os
import tensorflow as tf
import numpy as np
from tensorflow import keras
from skimage import io
from tensorflow.keras.preprocessing import image

# os.environ['CUDA_VISIBLE_DEVICES'] = '-1'
# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

# with tf.device('/cpu:1'):
model =tf.keras.models.load_model('/home/sachin269/Downloads/HACKCBS_ML_APP/DNNmodel.h5',compile=False)
print('Model loaded. Check http://127.0.0.1:5002/')


def model_predict(img_path, model):
    img = image.load_img(img_path, grayscale=False, target_size=(224,224))
    show_img = image.load_img(img_path, grayscale=False, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = np.array(x, 'float32')
    x /= 255
    preds = model.predict(x)
    class_names = ['Healthy', 'Unhealthy']
    pred_class = class_names[int(tf.round(preds)[0][0])]
    print(f"predicted leaf status is:  {pred_class}")
    return pred_class


@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        result = preds
        return result
    return None


if __name__ == '__main__':
    # app.run(port=5002, debug=True)

    # Serve the app with gevent
    http_server = WSGIServer(('', 5002), app)
    http_server.serve_forever()
    app.run()
