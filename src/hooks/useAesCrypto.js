import CryptoJS from 'crypto-js';

function useAesCrypto(key) {
    const encrypt = (text) => {
        return CryptoJS.AES.encrypt(text, key).toString();
    };

    const decrypt = (ciphertext) => {
        const bytes = CryptoJS.AES.decrypt(ciphertext, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    };

    return { encrypt, decrypt };
}

export default useAesCrypto;
