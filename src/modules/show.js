const show = () => {
    if(JSON.parse(localStorage.getItem('dataArr')) != null){

        let element = document.querySelector(".storage");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        let arr = [];
        arr = JSON.parse(localStorage.getItem('dataArr'));

        for(let i of arr){
            const p = document.createElement('p');
            p.textContent = `${i.address}, ${i.city}. Pasto kodas: ${i.post_code}`;
            document.querySelector('.storage').appendChild(p)
        }
        document.querySelector('.btn2').style.display = "block";
    }
}

export default show;