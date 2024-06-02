import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password.toString(), salt);
}

export const comparePasswords = async (password, hashedPassword) => {
    return bcrypt.compare(password.toString(), hashedPassword);
}