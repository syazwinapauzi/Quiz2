let dbUsers = [
    {
        username: "lulu",
        password: "123456",
        name: "LULU",
        email: "lulu@utem.edu.my"
    },
    {
        username: "Maya",
        password: "789100",
        name: "Maya",
        email: "maya@utem.edu.my"

    },
    {
        username: "Lala",
        password: "456789",
        name: "LALA",
        email: "lala@utem.edu.my"
    }
]

function login(a,b)
{
    let matchUser = dbUsers.find
    (
     N => N.username==a   
    )

    if(!matchUser) return "User not found!"
    if(matchUser.password == b){
         return matchUser
    }
    else
    {
        return "Invalid password"
    }     
}

function register(a,b,c,d)
{
    dbUsers.push
    (
        {
            username: a,
            password: b,
            name: c,
            email: d
        }
    )
}

//try to login
console.log(login("lulu","123456"))
console.log(login("Lala","456789"))
console.log(login("farah","060700"))

register("farah","060700","Izzati","izzaticute@utem.edu.my")

console.log(login("farah","060700"))