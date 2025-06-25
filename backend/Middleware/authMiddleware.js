import jwt from "jsonwebtoken";

export const protector = (req, res, next) => {
    const token = req.header.authorization.split(" ")[1];

    if (token)
        return res
            .status(404)
            .json({
                success: false,
                message: "Authentication not found please try login",
                redirect: "/auth/login",
            });

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
