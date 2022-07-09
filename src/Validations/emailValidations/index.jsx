export const EmailValidate = (InputEmail) =>{
    if (InputEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true; 
    } else {
      return false; 
    }
  }