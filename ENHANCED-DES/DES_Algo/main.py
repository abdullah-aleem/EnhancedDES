from enhancedDES import EnhancedDES
from Crypto.Random import get_random_bytes


plaintext = b'This is a secret message'
key = get_random_bytes(16)
ecryptionObj=EnhancedDES(plaintext)
encrypted_message = ecryptionObj.hybrid_encrypt(key)
print("Encrypted message:", encrypted_message)

decrypted_message = EnhancedDES.hybrid_decrypt(encrypted_message,key)
print("Decrypted message:", decrypted_message)
