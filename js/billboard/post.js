import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";


function postWithToken(target_url, FormData, responseFunction) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: FormData,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const insertBill = () => {
    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard";

    const imageInput = document.getElementById("gambar");
    const file = imageInput.files[0];

    console.log("Gambar:", file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("kode", getValue("kode"));
    formData.append("nama", getValue("nama"));
    formData.append("panjang", getValue("panjang"));
    formData.append("lebar", getValue("lebar"));
    formData.append("harga", getValue("harga"));
    formData.append("regency", getValue("regency"));
    formData.append("district", getValue("district"));
    formData.append("village", getValue("village"));
    formData.append("address", getValue("address"));
    formData.append("latitude", getValue("latitude"));
    formData.append("longitude", getValue("longitude"));

    console.log("Data:", formData);

    postWithToken(target_url, formData, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result);

    switch (result.status) {
        case 201:
            Swal.fire({
                icon: "success",
                title: "Insert Successful",
                text: result.message,
            }).then(() => {
                window.location.href = "list-billboard.html";
            });
            break;
        case 400:
            Swal.fire({
                icon: "error",
                title: "Bad Request: Insert Failed",
                text: result.message,
            });
            break;
        case 401:
            Swal.fire({
                icon: "error",
                title: "Unauthorized: Insert Failed",
                text: result.message,
            });
            break;
        case 403:
            Swal.fire({
                icon: "error",
                title: "Forbidden: Insert Failed",
                text: result.message,
            });
            break;
        case 500:
            Swal.fire({
                icon: "error",
                title: "Internal Server Error: Insert Failed",
                text: result.message,
            });
            break;
        default:
            Swal.fire({
                icon: "error",
                title: "Unknown Error: Insert Failed",
                text: result.message,
            });
            break;
    }
}

const btnInsert = document.getElementById("btnInsert");

btnInsert.addEventListener("click", insertBill);