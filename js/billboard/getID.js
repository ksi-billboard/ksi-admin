import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleTableBill, singleTableBill1, singleTableBill2 } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard?id=" + id;

const dataBill  = (value) => {
    const data = singleTableBill
    .replace("#GAMBAR#", value.gambar)

    addInner("bill", data);

    console.log(data);
}

const dataBill1  = (value) => {
    const data = singleTableBill1
    .replace("#KODE#", value.kode)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)

    addInner("bill1", data);

    console.log(data);
}

const dataBill2  = (value) => {
    const data = singleTableBill2
    .replace("#REGENCY#", value.regency)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#ADDRESS#", value.address)
    .replace("#LATITUDE#", value.latitude)
    .replace("#LONGITUDE#", value.longitude)

    addInner("bill2", data);

    console.log(data);
}

const responseData = (result) => {
    if (result.status === 200) {
        dataBill(result.data);
        dataBill1(result.data);
        dataBill2(result.data);
        
    }
}

getWithToken(target_url, responseData);


