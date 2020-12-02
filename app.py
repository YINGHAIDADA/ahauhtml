from flask import Flask, url_for,redirect
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
            return redirect(url_for('xinxi'))

    return render_template("index.html")

@app.route("/xinxi",methods=["GET","POST"])
def xinxi():
    return render_template("xinxi.html")

@app.route("/cailiaotijiao")
def cailiaotijiao():
    return render_template("cailiaotijiao.html")

@app.route("/shenhe")
def shenhe():
    return render_template("shenhe.html")

@app.route("/zongce")
def zongce():
    return render_template("zongce.html")

@app.route("/liuxin")
def liuxin():
    return render_template("liuxin.html")

if __name__ == '__main__' :
    app.run()