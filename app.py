from flask import Flask
from flask import render_template,request
from datetime import timedelta

app = Flask(__name__)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = timedelta(seconds=1)
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(seconds=1)
app.config['DEBUG'] = True

@app.route("/",methods=["GET","POST"])
def home():
    if request.method == 'POST':
        u = request.form['username']
        p = request.form['password']
        if u == '18115296' and p =='123456' :
            return render_template("xinxi.html")

    return render_template("index.html")

@app.route("/xinxi",methods=["GET","POST"])
def xinxi():
    return render_template("xinxi.html")

if __name__ == '__main__' :
    app.run()