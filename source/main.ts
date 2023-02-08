import validation from "./validation"
import log from "./config/log"

function isValidZipcode(countryCode: string, zip : number|string): boolean{
    try {
        return validation.isValidZipcode(countryCode,zip)
    } catch (error:any) {
        return error
    }
    
}

// function zipcode(countryCode: string, zip : number|string): (Object){
//     if()
//     return {}
// }

export {isValidZipcode}