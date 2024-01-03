import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const insertBill = () => {
    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard";
    const tokenkey = "Authorization";
    const tokenvalue = getCookie("Authorization");

    const gambarInput = document.querySelector('input[name="gambar"]');
    const gambarFile = gambarInput.files[0];

    console.log("Gambar:", gambarFile);

    const formData = new FormData();
    formData.append("gambar", gambarFile);
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

    postWithToken(target_url, tokenkey, tokenvalue, formData, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result.data);
    console.log("Server Message:", result.message);
    console.log("Server Status:", result.status);

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