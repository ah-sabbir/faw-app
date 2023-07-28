const GenerateUnique = (title:string)=>{
    return title.toLowerCase().replace(/ /g, '-')
}


export { GenerateUnique }
