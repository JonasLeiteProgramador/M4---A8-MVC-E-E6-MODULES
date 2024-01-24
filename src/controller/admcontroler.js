import { admin } from '../models/admModel.js'

let admins = []
function register(nome, email, senha, adminUser, controleCoins) {

    const novoAdmin = new admin(nome, email, senha, adminUser, controleCoins)
    admins.push(novoAdmin)
    return novoAdmin
}




function getAllAdmins() {
    return admins
}

function getAdminUserName(adminUser) {
    const admin = admins.find(data => data.adminUser === adminUser);
    return admin;

}

export { register, getAllAdmins, getAdminUserName }