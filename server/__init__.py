from flask import Flask, url_for
from flask import render_template, redirect


app = Flask(__name__,
            static_folder='static',
            template_folder='templates')


@app.route('/')
def redirect_to_index():
    return redirect(url_for('render_home'))

@app.route('/home')
def render_home():
    return render_template('home.html')

@app.route('/about')
def get_about():
    return render_template('about.html')

@app.route('/contact')
def get_contact():
    return render_template('contact.html')

