const axios = require('axios').default;



//pathAdd = 1
export function getFirmSeries(firm) {
    const pathFull = `https://ophim.cc/_next/data/xh7RZM-AoUeEjC-THHEA3/danh-sach/${firm}.json?slug=${firm}`
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
    const pathFull = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + pathAdd
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
    const pathFull = "https://ophim1.com/phim/" + slug
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
    const pathFull = `https://ophim.cc/_next/data/xh7RZM-AoUeEjC-THHEA3/the-loai/${genres}.json?slug=${genres}`
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
    const pathFull = `https://ophim.cc/_next/data/xh7RZM-AoUeEjC-THHEA3/quoc-gia/${country}.json?slug=${country}`
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
    const pathFull = `https://ophim.cc/_next/data/jMo1r8lC0F6IGwkz0ayh-/tim-kiem.json?keyword=${keysearch}`
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
    const pathFull = `https://ophim.cc/_next/data/xh7RZM-AoUeEjC-THHEA3/${type}/${details}.json?slug=${details}`
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





