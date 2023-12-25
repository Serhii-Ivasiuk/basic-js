const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if (typeof message !== 'string' || typeof key !== 'string') {
            throw new Error('Incorrect arguments!');
        }

        const alphabet = new Array(26)
            .fill(0)
            .map((_, i) => String.fromCharCode(i + 65));
        const charArr = message.toUpperCase().split('');
        const keyArr = key.toUpperCase().split('');

        let encryptedMessage = '';

        for (let i = 0, idx = 0; i < charArr.length; i += 1) {
            const char = charArr[i];
            const charIdx = alphabet.indexOf(char);

            if (charIdx !== -1) {
                const keyChar = keyArr[idx % keyArr.length];
                const keyIdx = alphabet.indexOf(keyChar);

                const encryptIdx = (charIdx + keyIdx) % alphabet.length;

                encryptedMessage += alphabet[encryptIdx];

                idx += 1;
            } else {
                encryptedMessage += char;
            }
        }

        return this.isDirect
            ? encryptedMessage
            : encryptedMessage.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
            throw new Error('Incorrect arguments!');
        }

        const alphabet = new Array(26)
            .fill(0)
            .map((_, i) => String.fromCharCode(i + 65));
        const charArr = encryptedMessage.toUpperCase().split('');
        const keyArr = key.toUpperCase().split('');

        let decryptedMessage = '';

        for (let i = 0, idx = 0; i < charArr.length; i += 1) {
            const char = charArr[i];
            const charIdx = alphabet.indexOf(char);

            if (charIdx !== -1) {
                const keyChar = keyArr[idx % keyArr.length];
                const keyIdx = alphabet.indexOf(keyChar);

                const decryptIdx =
                    (charIdx - keyIdx + alphabet.length) % alphabet.length;

                decryptedMessage += alphabet[decryptIdx];

                idx += 1;
            } else {
                decryptedMessage += char;
            }
        }

        return this.isDirect
            ? decryptedMessage
            : decryptedMessage.split('').reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine,
};
