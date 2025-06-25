import { isUserLogged } from "../globalFunctions.js"
/**
 * This will check: if user is logged in , send random coin from gekco api  
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const cryptoNews = (req, res) => {
    isUserLogged(req, res)
    
    console.log("ITS working")

return res.status(200).json({success: true, message : "Everything is working"})
}