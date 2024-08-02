from enhancedDES import EnhancedDES
import itertools
import string
from Crypto.Random import get_random_bytes


def generate_keys():
    all_keys = []
    for key in itertools.product(string.printable, repeat=16):
        all_keys.append(''.join(key).encode('utf-8'))
    return all_keys

message=b'encrypt this'
ecryptionObj=EnhancedDES(message)
key = get_random_bytes(16)
encrypted_message = ecryptionObj.hybrid_encrypt(key)
keys = generate_keys()
for key in keys:
    decrypted_message = ecryptionObj.hybrid_decrypt(encrypted_message,key)

    if decrypted_message==message:
        print("Key found:", key)
        print("Plaintext:", decrypted_message)
        break
