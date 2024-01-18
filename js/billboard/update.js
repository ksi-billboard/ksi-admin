import { putData } from "../temp/component.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard?id=" + id;

    const imageInput = document.getElementById("gambar");
    let file = imageInput.files[0];

    if (!file) {
        file = document.getElementById("imageupdate").src;
    }

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
    
    putData(target_url, formData, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result, result.status);
    if (result.status === 200) {
        Swal.fire({
            icon: "success",
            // title: "Update Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list-billboard.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            // title: "Update Failed",
            text: result.message,
        });
    }
}

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateTodo);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateTodo();
  });
