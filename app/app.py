import numpy as np
import pandas as pd
import math
from flask import Flask, render_template, url_for, request
import pickle


def round_down(n, decimals=0):
    multiplier = 10 ** decimals
    return math.floor(n * multiplier) / multiplier


app = Flask(__name__)
model = pickle.load(open("predict_price", "rb"))


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=["POST"])
def predict():
    result = request.form
    features = [[x for x in request.form.values()]]
    predict = np.exp(model.predict(features))[0]
    prediction = round_down(predict, -5)
    prediction = round(prediction)
    if prediction < 5000000:
        x = 0.1
    else:
        x = 0.05
    lower_price = prediction
    higher_price = prediction + (x * prediction)
    return render_template('predict.html', lower="{:,}".format(lower_price), higher="{:,}".format(higher_price), result=result)


if __name__ == "__main__":
    app.run(debug=True)
