/**
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token client
 * 
 */


/**
 * How to store token in the client side 
 * 1. Memory --> okay type
 * 2. Local storage --> okay type (XSS)
 * 3. Cookies: http only cookies
 */

/**
 * 1. Set cookies with http only. for development secure: false, 
 * 
 * 2. Cors setting
 * app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
 * 
 * 3. Client side axios setting
 * 
 * 
 * token generate
 * node> require('crypto').randomBytes(64).toString('hex')
 */

/**
 * 1. To send the cookies from the client make sure you added withCredentials true for the API call using AXIOS
 */

const jwt= require('jsonwebtoken')

app.post('/jwt', async(req, res)=>{
    const user = req.body;
    console.log(user);
    const token = jwt.sign(user, 'secret', process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
    res
    .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none'
    })
    .send({success: true})
})


const jwt = requrie('jsonwebtoken');

app.post('/jwt', async(req, res)=>{
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
    res
    .cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none'
    })
    .send({success: true})
})