export const authenticateOwner = async (req, res, next) => {
    if (req.owner) {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized, no owner found')
    }
}