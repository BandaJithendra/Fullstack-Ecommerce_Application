import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const DashBoardController = (req,res) =>{
    const {token} = req.body
    console.log("Token crt..",token)
    try {
        var decoded = JWT.verify(token,process.env.SECRET_KEY);
        console.log("email...",decoded.email)
        res.status(200).json({message: "Token Verfied.",user: decoded})
      } catch(err) {
        console.log("err...",err)
      }
    res.status(400).json({message: "Token not Verifed."})

}