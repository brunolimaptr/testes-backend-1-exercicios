const usuarios = [
    {nome: "bruno", id: "n001"},
    {nome: "Astrodev", id: "n002"}
    ]  



export const exercicio3 = (users: string) =>{
    for(var user of usuarios){
        if(user.nome === users){
            return user.nome
        }
    }
 }