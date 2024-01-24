import {user} from './user.js'
class admin extends user{
    constructor(nome,email, senha,adminUser,controleCoins){
     super(nome,email,senha)
     this.adminUser = adminUser
     this.controleCoins = controleCoins
        
    }

}

export { admin }