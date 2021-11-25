import  form from "./form";

const rendersForms = () =>{
    let formElement = document.createElement('form');
    formElement.className= 'form-inline';
    formElement.innerHTML= form();
    document.querySelector('main .card-body').appendChild(formElement)
}
export default rendersForms