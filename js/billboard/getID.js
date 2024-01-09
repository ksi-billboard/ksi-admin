import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleTableBill, singleTableBill2 } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard?id=" + id;

const dataBill  = (value) => {
    console.log("value: ", value);

    const bil = singleTableBill + singleTableBill2

    const data = bil
    .replace("#GAMBAR#", value.gambar)
    .replace("#KODE#", value.kode)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)
    .replace("#REGENCY#", value.regency)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#ADDRESS#", value.address)
    .replace("#LATITUDE#", value.latitude)
    .replace("#LONGITUDE#", value.longitude)

    addInner("bill", data);
    addInner("bill2", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        console.log(result.data);

        result.data.forEach(dataBill);
    }
}

getWithToken(target_url, responseData);
