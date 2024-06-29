"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/hello2', methods=['POST', 'GET'])
def handle_hello2():

    response_body = {
        "message": "Hello2! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

@api.route('/users/<int:user_id>', methods=['GET'])

def get_user_by_id(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    return jsonify(user.serialize()), 200



@api.route("/login", methods=["POST"])

def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None or user.password != password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)



@api.route("/signup", methods=["POST"])
def signup():
    body = request.json  # Obtenemos el cuerpo completo de la solicitud JSON
    
    # Verificamos que los campos 'email' y 'password' estén presentes en el cuerpo de la solicitud
    if "email" not in body or "password" not in body:
        return jsonify({"msg": "Missing email or password"}), 400

    # Verificamos si ya existe un usuario con el mismo email
    if User.query.filter_by(email=body["email"]).first() is not None:
        return jsonify({"msg": "User already exists"}), 400

    # Creamos un nuevo usuario con los datos proporcionados
    new_user = User(email=body["email"], password=body["password"], is_active=True)
    
    # Agregamos el nuevo usuario a la base de datos y confirmamos los cambios
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created successfully"}), 201


         