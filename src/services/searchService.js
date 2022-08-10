import  * as httpRequest  from '~/utils/httpRequest'; // * là import tất cả các export lẻ vào resquest



export const search = async (q, type = 'less') => {
    try{
        if(q === undefined){
            q = encodeURIComponent(q)
        }
        
        const res = await httpRequest.get(`users/search?`, {
            params: {
                q,
                type,
            },
        })
        return res.data
    } catch(error){
        console.log(error)
    }
}

search();