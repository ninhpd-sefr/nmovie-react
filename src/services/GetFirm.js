const axios = require('axios').default;


//pathAdd = 1
export function getFirmList(pathAdd) {
    const pathFull = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page="+pathAdd
    axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}


//slug=moi-truong-xac-song

export function getFirmItem(slug) {
    const pathFull = "https://ophim1.com/phim/"+slug
    axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}


//genres = hai-huoc
export function getFirmGenres(genres) {
    const pathFull = `https://ophim.cc/_next/data/jMo1r8lC0F6IGwkz0ayh-/the-loai/${genres}.json?slug=${genres}`
    axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}


//country = han-quoc
export function getFirmCountry(country) {
    const pathFull = `https://ophim.cc/_next/data/jMo1r8lC0F6IGwkz0ayh-/quoc-gia/${country}.json?slug=${country}`
    axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}

//search = keysearch
export function getFirmSearch(keysearch) {
    const pathFull = `https://ophim.cc/_next/data/jMo1r8lC0F6IGwkz0ayh-/tim-kiem.json?keyword=${keysearch}`
    axios.get(pathFull).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}





