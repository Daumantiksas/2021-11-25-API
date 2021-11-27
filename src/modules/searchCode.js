import ajaxServer from "./ajaxServer";
import saveData from "./saveData";
import show from "./show";

const  searchCode = () =>{
    document.querySelector('form').addEventListener('submit',(event)=>{
        event.preventDefault()
        const searchTerm= document.querySelector('.term').value
        let searchResponse;
        ajaxServer(searchTerm)
            .then(result=>searchResponse=result)
            .then(()=>console.log(searchResponse.data[0]))
            .then(()=>{
                if(searchResponse.total===1){
                    document.querySelector('.result').value=searchResponse.data[0].post_code;
                    saveData(searchResponse.data[0])
                    show();    
                }else{
                    document.querySelector("main").innerHTML="<p>Paieskai nesekminga</p>"
                }
            })

    })
}

export default searchCode