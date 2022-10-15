
// edit data item firm
export const mappingDataItemFirm = (data)=>{
    const itemData = {
        id: data._id,
        name: data.name,
        originName: data.origin_name,
        postUrl: data.poster_url,
        slug: data.slug,
        time:data.time
    }

    return itemData
}


export const listFirmNumber = (list,number)=>{
    let listFirm = []
    if(list){
        for (let index = 0; index < number; index++) {
            listFirm[index] = list[index]
        }
    }

    return listFirm
    

}

// get action form list detail page

 