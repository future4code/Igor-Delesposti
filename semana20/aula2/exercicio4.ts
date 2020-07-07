exports.handler = async (event) => {
    // TODO implement
    const checkEmail = event.email.includes("@")
    const checkDot = event.email.includes(".")
   
    
    
    if(!checkEmail){
        const result = {
            "isMail": false,
            "reason": "não tem o @"
        };
        return result
    }
    
    if(!checkDot){
        const result = {
            "isMail": false,
            "reason": "não tem o ."
        }
        return result
    };
    
    const result = {
        "isMail": true,
    }
    
    return result;
};
