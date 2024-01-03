import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const insertBill = () => {
    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard";
    const tokenkey = "Authorization";
    const tokenvalue = getCookie("Authorization");

    // const gambarInput = document.getElementById("gambar");
    // const gambarFile = gambarInput.files[0];

    // console.log("Gambar:", gambarFile);

    const data = {
        gambar : getValue("gambar"),
        kode : getValue("kode"),
        nama : getValue("nama"),
        panjang : getValue("panjang"),
        lebar : getValue("lebar"),
        harga : getValue("harga"),
        regency : getValue("regency"),
        district : getValue("district"),
        village : getValue("village"),
        address : getValue("address"),
        latitude : getValue("latitude"),
        longitude : getValue("longitude"),

    }

    console.log("Data:", data);

    postWithToken(target_url, tokenkey, tokenvalue, data, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result.data.data);
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