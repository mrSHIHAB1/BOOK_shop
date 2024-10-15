
export const savetoLocalstorage=(data)=>{
    const saveData=JSON.parse(localStorage.getItem('Books'))||[];
    const existedata=saveData.find(item=>item.id==data.id)
    if(!existedata){
        saveData.push(data)
        localStorage.setItem('Books',JSON.stringify(saveData))
        return 1;

    }
    else{
        return 0;
    }

}
export const checkifhas=(data)=>{
    const saveData=JSON.parse(localStorage.getItem('Books'))||[];
    const existedata=saveData.find(item=>item.id==data.id)
    if(!existedata){
        return 1
        
    }
    else{
        return 0
    }

}
export const wishtoLocalstorage=(data)=>{
    const saveData=JSON.parse(localStorage.getItem('Wish'))||[];
    const existedata=saveData.find(item=>item.id==data.id)
    if(!existedata){
        saveData.push(data)
        localStorage.setItem('Wish',JSON.stringify(saveData))
        return 1;

    }
    else{
        return 0;
    }

}
export const getfromwish=()=>{
    const gData=JSON.parse(localStorage.getItem('Wish'))||[];
    return gData;
}

export const getfromlocalstorage=()=>{
    const wData=JSON.parse(localStorage.getItem('Books'))||[];
    return wData;
}