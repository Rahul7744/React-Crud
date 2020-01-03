class LocalStoreManager {
    constructor(){
        
    }

    getData = (key) =>{
    
        const data = localStorage.getItem(key) || "{}"

        // console.log("FFFFF",data, JSON.parse(data))
        return JSON.parse(data)
    }

    setData = (key,data) => {
        // console.log("Kya mila", key, data)
        const stringify = JSON.stringify(data)
        try{
            localStorage.setItem(key,stringify)
            return true
        }
        catch(e){
            console.error(e)
        }
        return false
    }
}


export default LocalStoreManager