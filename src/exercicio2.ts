export const exercicio2 = (date: string):string =>{
    const dataBR = date.split("/").reverse().join("/")
    return dataBR
 }