from flask import Flask, request, jsonify
from enhancedDES import EnhancedDES

app=Flask(__name__)

@app.route('/encrypt', methods=['POST'])
def method1():
    data = request.json
    key = data['key'] 
    plaintext = data['plaintext']
    ecryptionObj=EnhancedDES(plaintext)
    encrypted_message = ecryptionObj.hybrid_encrypt(key)    
    return jsonify({'result': encrypted_message})



@app.route('/decrypt', methods=['POST'])
def method2():
    data = request.json
    key = data['key'] 
    cypher_text = data['cypher_text']
    decrypted_message = EnhancedDES.hybrid_decrypt(cypher_text,key)
    return jsonify({'result': decrypted_message})


if __name__ == '__main__':
    app.run(debug=True)