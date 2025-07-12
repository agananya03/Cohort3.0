const jwt=require("jsonwebtoken");
const jwtpassword="secret";
const zod=require("zod");

const emailschema=zod.string().email();
const passwordschema=zod.string().min(6);
function signjwt(username,password){
    const usernameresponse=emailschema.safeParse(username);
    const passwordresponse=passwordschema.safeParse(password);
    if(!usernameresponse.success ||!passwordresponse.success){
        return null;
    }
    const signature=jwt.sign({
        username
    },jwtpassword)
    return signature;
}

function verifyjwt(token){
    let ans=true;
    try{
        jwt.verify(token,jwtpassword);
    } catch(e){
        ans=false;
    }
    return ans;
}

function decodejwt(token){
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}