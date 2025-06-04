import jwt from 'jsonwebtoken'

const jwtSecret = 'hady8adha76da8hf7'

const generateToken = (payload)=>{
    const token = jwt.sign(
        payload, 
        jwtSecret,
        {expiresIn: '1h'}
    );

    return token;
}

const verifyToken = (token)=>{
    const payload = jwt.verify(
        token, 
        jwtSecret
    );
        return payload
}


export{
    generateToken,
    verifyToken
}