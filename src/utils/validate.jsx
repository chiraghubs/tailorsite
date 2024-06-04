export const checkValidData = (email,password,name)=>{

    const isEmailValid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameRegex = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    // console.log(name);

    if(!isPasswordValid) return "Password Id is not valid";
    if(!isEmailValid) return "Email Id is not valid";
    if(!nameRegex) return "Name is not valid";

    return null;

}