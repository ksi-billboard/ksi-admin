import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { tableBill } from "../temp/table.js";

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard"

const dataBill  = (value) => {
    console.log("value: ", value);

    const data = tableBill
    .replace("#GAMBAR#", value.file)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)

    addInner("tableAllBill", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach(dataBill);
    }
}

getWithToken(target_url, responseData);
