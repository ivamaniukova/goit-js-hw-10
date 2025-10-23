import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const snackForm = document.querySelector(".form");

snackForm.addEventListener("submit", e =>{
    e.preventDefault();

    const timer = parseInt(e.currentTarget.elements.delay.value);
    const radio = e.currentTarget.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(radio === "fulfilled") {
                resolve(timer);

            }else {
                reject(timer);
            }
        }, timer);
    });

    promise
    .then(delayValue => {
      iziToast.success({
        color: 'green',
        position: "topRight",
        message: `Fulfilled promise in ${delayValue}ms`
      });
    })
    .catch(delayValue => {
      iziToast.error({
        color: 'red',
        position: "topRight",
        message: `Rejected promise in ${delayValue}ms`
      });
    });
})