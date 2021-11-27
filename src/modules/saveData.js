const saveData = (data) => {

    let arr = [];
    if(JSON.parse(localStorage.getItem('dataArr')) != null)
        arr = JSON.parse(localStorage.getItem('dataArr'));
    arr.push(data);
    console.log(arr);
    localStorage.setItem('dataArr', JSON.stringify(arr));
}

export default saveData;