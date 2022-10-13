
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

// limit amount firm home page
export const listFirmHomePage = (list)=>{
    let listFirm = []
    if(list){
        for (let index = 0; index < 8; index++) {
            listFirm[index] = list[index]
        }
    }

    return listFirm
    

}

// get action form list detail page

 