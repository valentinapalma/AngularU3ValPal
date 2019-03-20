/*
Modell för vad som krävs för admin att logga in
*/
export class AdminLogin {

    constructor (
        public email:string,
        public password:string
    ) { }
    
}