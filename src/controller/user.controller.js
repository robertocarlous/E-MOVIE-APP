const {generateToken} = require("../helpers/verifyAuthToken"); //generatetoken
const {validateData} = require("../helpers/verifyAuthToken") // validatedata
const bcrypt = require ("bcryptjs");        //bcrypt to hash password
const usersmodel = require("../model/usersmodel"); //usersmodel
async function register(req, res) {
  try {
    const data = req.body;
    const keys = ["name", "password", "email", "gender", "country"];
    const validate = validateData(req.body, keys);
    if (validate.error === true) {
      return res.status(400).json({ message: `${validate.key} ${validate.message}` });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(data.password, salt);
    data.password = hashPassword;
    const user = await usersmodel.create(data);
    return res.status(200).json({message: "User Registered successfully",data: user,});
    }catch (error) {
    
    if (error.code === 11000)
      return res.status(400).json({ message: "User already exist" });
    res.status(400).json({ message: error.message });
  }
}

async function login (req, res){
  try{
    const data = req.body;
    const keys = ["password", "email"];
    const validate = validateData(req.body, keys);
    if(validate.error === true){
      return res.status(400).json({message: `${validate.key} ${validate.message}`});
  }
  const user = await usersmodel.findOne({email:data.email});
  if(!user) return res.status(400).json({message:"user does not exist"});
  const isPasswordMatched = await bcrypt.compare(data.password, user.password);
  if(!isPasswordMatched){
    return res.status(400).json({message:"incorrect password"});
  }
  const token = generateToken(user);
  return res.status(200).json({message:"user logged in successfully", data:{token, name:user.name, email:user.email,}})
}catch(error){
res.status(400).json({message:error.message});
}}

async function sendResetPassword (req, res) {
  try{
    const data = req.body;
    if(!data.email)
    return res.status(400).json({message:"email is required"});
  const user = await usersmodel.findOne({email:data.email});
  if(!user) return res.status(400).json({message:"user does not exist"});
  const code = "0000";
  user.resetPasswordToken = code;
  await user.save();
  return res.status(200).json({message:"reset password code sent"});
}catch(error){
  res.status(400).json({message:error.message});
}
}
module.exports = {
  register, 
  login, 
  sendResetPassword,
  //verifyResetPassword,
  //getProfile,
};

