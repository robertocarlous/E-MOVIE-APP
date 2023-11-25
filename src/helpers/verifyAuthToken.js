
const jwt = require("jsonwebtoken");
function validateData(data, keys) {
    const dataKeys = Object.keys(data);
    for (const key of keys) {
      if (!dataKeys?.includes(key)) {
        return { key, message: "is required", error: true };
      }
    }
    return {
      error: false,
    };
  }
function generateToken(user) {
    const token = jwt.sign(
        {
            id:user._id.toString(),
        },
        "$2a$10$usCW3ze0RLUPlhmZAjQd1OyeBh5Tps2lKP7mRQ/3yBa3KCS.ioE4K",
        {    
         expiresIn: "5hr",
        }
    )
    return token;
}
function verifyAuthToken(token) {
    const payload = jwt.verify(token, "$2a$10$usCW3ze0RLUPlhmZAjQd1OyeBh5Tps2lKP7mRQ/3yBa3KCS.ioE4K")
    return payload;
}

module.exports = {
    generateToken, 
    verifyAuthToken,
    validateData,
};


