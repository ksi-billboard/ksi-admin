import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleTableBill, singleTableBill2 } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard?id=" + id;

const dataBill  = (value) => {
    console.log("value: ", value);

    const data = singleTableBill
    .replace("#GAMBAR#", value.gambar)
    .replace("#KODE#", value.kode)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)

    addInner("bill", data);
}

const dataBill2  = (value) => {
    console.log("value: ", value);

    const data2 = singleTableBill2
    .replace("#REGENCY#", value.regency)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#ADDRESS#", value.address)
    .replace("#LATITUDE#", value.latitude)
    .replace("#LONGITUDE#", value.longitude)

    addInner("bill2", data2);
}

const responseData = (result) => {
    if (result.status === 200) {
        console.log(result.data);

        dataBill(result.data);
        dataBill2(result.data);
        
    }
}

getWithToken(target_url, responseData);


