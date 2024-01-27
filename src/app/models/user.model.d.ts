export interface User {
    firstName:string,
    lastName:string,
    email:string
}

export interface ManualUser extends User{
 password?:string
}

export interface SocialUser extends User {
id:string
idToken:string
photoUrl:string
provider:string
}


export interface LoginData {
    email:string,
    password:string
}