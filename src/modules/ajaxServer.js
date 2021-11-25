const ajaxServer = (term) =>{
    const url = "https://api.postit.lt/?term=";
    const key = "7DCmhEg4L5ACmPNWnmfA";
    return fetch(`${url}${term}&key=${key}`)
        .then(response=>response.json())
}
export default ajaxServer