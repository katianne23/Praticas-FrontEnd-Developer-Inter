function getAdmin(map){
    let admin = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admin.push(key);
        }
    }
    return admin;

}

const user = new Map();

user.set('Katianne', 'Admin');
user.set('Frajola', 'User');
user.set('João', 'Admin');
user.set('Ana', 'Admin');

console.log(getAdmin(user));
