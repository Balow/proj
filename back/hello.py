#!flask/bin/python
from functools import wraps
from flask import Flask, json, request, Response

app = Flask(__name__)

indicator = [
    {
        'id': 1,
        'root' : 1,
        'level': 1,
        'name': u'indicator: first'
    },
    {
        'id': 2,
        'root' : 1,
        'level': 1,
        'name': u'indicator: second'
    },
    {
        'id': 3,
        'root' : 2,
        'level': 1,
        'name': u'indicator: third'
    }
]

themeBox = [
    {
        'id' : 1,
        'name' :  'theme: first'  
    },
    {
        'id' : 2,
        'name' :  'theme: second'  
    },
]

def check_auth(username, password):
    """This function is called to check if a username /
    password combination is valid.
    """
    return username == 'admin' and password == 'secret'

def authenticate():
    """Sends a 401 response that enables basic auth"""
    return Response(
    'Could not verify your access level for that URL.\n'
    'You have to login with proper credentials', 401,
    {'WWW-Authenticate': 'Basic realm="Login Required"'})

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return authenticate()
        return f(*args, **kwargs)
    return decorated


@app.route('/api/indicator', methods=['GET'])
#@requires_auth
def get_indicator():
	r = Response(json.dumps(indicator), status=200)
	r.headers['Access-Control-Allow-Origin'] =  "*"
	return r

@app.route('/api/themeBox', methods=['GET'])
def get_theme_box():
    r = Response(json.dumps(themeBox), status=200)
    r.headers['Access-Control-Allow-Origin'] =  "*"
    return r

if __name__ == '__main__':
    app.run(debug=True)