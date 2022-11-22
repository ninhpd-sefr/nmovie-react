
// edit data item firm
export const mappingDataItemFirm = (data)=>{
    
    const itemData = {
        id: data._id,
        name: data.name,
        originName: data.origin_name,
        name:data.name,
        postUrl: data.poster_url,
        slug: data.slug,
        time:data.time
    }

    return itemData
}

// edit DataItemFirmPageDetail

export const mappingDataItemFirmPageDetail = (data)=>{
    const dataItem = data.item
    if(!dataItem) return
    const itemData = {
        linkFirm: data.episodes.episode[0].server_data[0].link_embed,
        id: dataItem._id,
        name:dataItem.name,
        originName: dataItem.origin_name,
        desc: dataItem.content,
        cast:dataItem.actor,
        img:'http://img.ophim1.cc/uploads/movies/'+dataItem.thumb_url,
        imgPoster:'http://img.ophim1.cc/uploads/movies/'+dataItem.poster_url,
        year:dataItem.year,
        country: dataItem.country[0].name,
        genres:data.breadCrumb[0].name
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


//  remmove tag
export function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}