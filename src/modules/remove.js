const remove = () => {
    document.querySelector('.btn2').addEventListener('click', () => {
        document.querySelector('section .card-body').value = "";
        localStorage.removeItem('dataArr');
        console.log("localStoraguikas " + localStorage.getItem('dataArr'));
        let element = document.querySelector(".storage");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.querySelector('.btn2').style.display = 'none';

    })
}

export default remove;