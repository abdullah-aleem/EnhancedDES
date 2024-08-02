from flask import Flask, request, jsonify
from enhancedDES import EnhancedDES
from flask_cors import CORS
import ast
app=Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/encrypt', methods=['POST'])
def method1():
    data = request.json
    print(data)
    key = data['key']
    key=key.encode() 
    plaintext = data['plaintext'].encode()
    ecryptionObj=EnhancedDES(plaintext)
    encrypted_message = ecryptionObj.hybrid_encrypt(key)    
    encrypted_message=str(encrypted_message)
    return jsonify({'result': encrypted_message})



@app.route('/decrypt', methods=['POST'])
def method2():
    data = request.json
    key = data['key'].encode() 
    cypher_text = data['cypherText']
    cypher_text=ast.literal_eval(cypher_text)
    decrypted_message = EnhancedDES.hybrid_decrypt(cypher_text,key)
    return jsonify({'result': str(decrypted_message)})

 
if __name__ == '__main__':
    app.run(debug=True,port=4000)