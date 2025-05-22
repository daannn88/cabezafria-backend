const createusers =  (req, res)=>{
    const imputData = req.body;

    console.log( imputData );
    
    res.send( 'imputData' );

}

export {
    createusers
}