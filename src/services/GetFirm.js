const axios = require('axios').default;
const generalLink = `https://ophim1.cc/_next/data/4Ty7510PdBWqP8sPF1ThI`


//pathAdd = 1
export function getFirmSeries(firm) {
    const pathFull = `${generalLink}/danh-sach/${firm}.json?slug=${firm}`
    return (
        axios.get(pathFull).then(
            (response) => {
                var result = response.data;
                    return result
            },
            (error) => {
                console.log(error);
            }
        )
   )
}



//pathAdd = 1
export function getFirmList(pathAdd) {
    // const pathFull = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + pathAdd
    const pathFull = `${generalLink}/danh-sach/phim-moi-cap-nhat?page=${pathAdd}`

    return(
        axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            return result
        },
        (error) => {
            console.log(error);
        }
    )
    )
    ;
}


//slug=moi-truong-xac-song

export function getFirmItem(slug) {
    const pathFull = `${generalLink}/phim/${slug}.json?=slug=${slug}`
    
    return(
        axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            return result
        },
        (error) => {
            console.log(error);
        }
    )
    )
    ;
}


//genres = hai-huoc
export function getFirmGenres(genres='hanh-dong') {
    const pathFull = `${generalLink}/the-loai/${genres}.json?slug=${genres}`
    return(
        axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            return result
        },
        (error) => {
            console.log(error);
        }
    )
    )
    ;
}


//country = han-quoc
export function getFirmCountry(country = "han-quoc") {
    const pathFull = `${generalLink}/quoc-gia/${country}.json?slug=${country}`
    return(
        axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            return result
        },
        (error) => {
            console.log(error);
        }
    )
    )
    ;
}

//search = keysearch
export function getFirmSearch(keysearch) {
    const pathFull = `${generalLink}/tim-kiem.json?keyword=${keysearch}`
    return(
        axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            return result
        },
        (error) => {
            console.log(error);
        }
    )
    )
    ;
}

export function getFirmListDetails(type,details) {
    const pathFull = `${generalLink}/${type}/${details}.json?slug=${details}`
    return(
        axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            return result
        },
        (error) => {
            console.log(error);
        }
    )
    )
    ;
}





