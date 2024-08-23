/*          from module-->58,59,60
        --------------------------------
1.install jsonwebtoken in server side
2.jwt.sign(payload,secret,{expiresIn:}) in post method
3.token client:token send to client side
*/

/*
*how to store token in client side:
    1.memory
    2.local storage-XSS
    3.cookies:http only
*/

/*
1.set cookies with http only.for development secure:false
2.cors setting-->
    app.use(cors({
        origin:['http://localhost:5173'],
        credentials:true
    }));
3.client side axios setting
in axios set -->withCredential:true
*/




/*          from module-->58,59,60
        --------------------------------
                Make API Secure
        --------------------------------

#Concept :
1.assign 2 tokens for each user(1.access token,2.refresh token)
2.access token contains:user identification(email,role etc)-->valid for a shorter duration
3.refresh token is used: to recreate an access token that was expired
4.if refresh token is invalid then logout the user


##JWT-->Json Web Token
1.generate a token by using--->jwt.sign({data: 'foobar'}, 'secret', { expiresIn: '1h' });
1a.generate a token by using-->jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
2.Create API,set to cookie.httpOnly,secure,sameSite.
3.from clientSide : axios withCredentials true
4.cors setup origin & credentials true



*/