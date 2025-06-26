import jwt from 'jsonwebtoken'

const generateToken = (payload)=>{
    const token = jwt.sign(
        payload, 
        process.env.jwtSecret,
        {expiresIn: '1h'}
    );

    return token;
}

const verifyToken = (token)=>{
    const payload = jwt.verify(
        token, 
        process.env.jwtSecret,
    );
    
    return payload
}


export{
    generateToken,
    verifyToken
}