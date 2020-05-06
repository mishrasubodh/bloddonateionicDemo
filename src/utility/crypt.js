const crypto = require("crypto");
const algorithm = 'aes-256-cbc'; 
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16);

let encryptionKey =  ("5cb56228c917d540baa455b25cb56228").toString('binary'); // Must be 256 bits (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16
const encriptdcript = {
  getencrypt: async (text) => {
    let result = { cipherText: null };
    try {
        let iv = crypto.randomBytes(IV_LENGTH);
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey.toString("binary")), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        result.cipherText = iv.toString('hex') + ':' + encrypted.toString('hex');
        result.key= encryptionKey
    } catch (ex) {
        result.error = ex;
    }
    return result;
  },

getdecpret:async (pass) => {
  var text = pass.cipherText;
  var encryptionKey = pass.key
  let result = { plainText: null };
  try {
      let textParts = text.split(':');
      let iv = Buffer.from(textParts.shift(), 'hex');
      let encryptedText = Buffer.from(textParts.join(':'), 'hex');
      let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryptionKey.toString("binary")), iv);
      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);
      result.plainText = decrypted.toString();
  } catch (ex) {
      result.error = ex;
  }
  return result;
}

};

module.exports = encriptdcript;
