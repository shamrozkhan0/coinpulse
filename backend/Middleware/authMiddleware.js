import jwt from "jsonwebtoken";

export const protector = (req, res, next) => {

    const authHeaders = req.headers;

    if (!authHeaders.authorization) {
        return res.status(400).json({ success: false, message: "Something went wrong , relogin again", redirect: "/auth/login" })
    }

    const token = authHeaders.authorization.split(" ")[1];

    console.log(`JWT Token: ${token} `)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({
                success: false,
                message: "invalid token",
                message: "There must be a problem try login again",
                redirect: "/auth/login",
            });
    }
};
