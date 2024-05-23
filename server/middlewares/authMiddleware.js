export const authenticateGoogle = async (req, res, next) => {
    if (req.session.userId) {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized, no user found')
    }
}