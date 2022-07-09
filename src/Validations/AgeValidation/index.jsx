
export const AgeValidation = (age)=> {

    age = parseInt(age);

    return (age >= 18 && age <= 65)

}