from Crypto.Cipher import AES, DES

import hmac 
import hashlib
class EnhancedDES:
    def __init__(self,plaintext):
        self.plaintext=plaintext
        
    
    @staticmethod
    def derive_key_8_bytes(master_key):
        salt = b'this_is_a_salt'  
        info = b'NoInfoHere'  
        length = 8  
        pseudorandom_key = hmac.new(salt, master_key, hashlib.sha256).digest()
        derived_key = hmac.new(pseudorandom_key, info + b'\x01', hashlib.sha256).digest()
        return derived_key[:length]
    
    @staticmethod
    def remove_padding(data):  
        return data.partition(b'\x00')[0]
    
    @staticmethod
    def mix_aes(block,x,key_aes):
        aes_cipher = AES.new(key_aes, AES.MODE_ECB)
        padded_block = block + b'\x00' * (16 - len(block) % 16)
        if x:
            return aes_cipher.encrypt(padded_block)
        else:
            return aes_cipher.decrypt(padded_block)
    
    @staticmethod
    def mix_des(block,x,key_des):
        des_cipher = DES.new(key_des, DES.MODE_ECB)
        padded_block = block + b'\x00' * (8 - len(block) % 8)
        if x:
            return des_cipher.encrypt(padded_block)
        else:
            return des_cipher.decrypt(padded_block)
    
    def hybrid_encrypt(self,key):
        key_aes=key
        key_des=EnhancedDES.derive_key_8_bytes(key)
        mixed_aes = EnhancedDES.mix_aes(self.plaintext,True,key_aes)
        mixed_des = EnhancedDES.mix_des(mixed_aes,True,key_des)
        return mixed_des
    @staticmethod
    def hybrid_decrypt(ciphertext,key): 
        key_aes=key
        key_des=EnhancedDES.derive_key_8_bytes(key)
        unmixed_aes = EnhancedDES.mix_des(ciphertext,False,key_des)
        unmixed_des = EnhancedDES.mix_aes(unmixed_aes,False,key_aes)
        return EnhancedDES.remove_padding(unmixed_des)


