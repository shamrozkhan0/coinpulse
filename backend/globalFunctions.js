/**
 *  Checks if user is logged
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const checkIfUserLogged = (req, res) =>{
    const isLogin = req.headers.authorization;

    if(!isLogin || !isLogin.startsWith("Bearer ")){
       return res.status(400).json({success:false , redirect: "/auth/login"})
    }

    return true;
}