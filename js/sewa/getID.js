import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleTableSewa, singleTableSewa1 } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

const dataSewa  = (value) => {
    const data = singleTableSewa
    .replace("#GAMBAR1#", value.content)

    addInner("sewa", data);
}

const dataSewa1  = (value) => {
    const data1 = singleTableSewa1
    .replace("#MULAI#", value.tanggal_mulai)
    .replace("#SELESAI#", value.tanggal_selesai)

    addInner("sewa1", data1);
}

const responseData = (result) => {
    if (result.status === 200) {
        dataSewa(result.data);
        dataSewa1(result.data);
        
    }
}

getWithToken(target_url, responseData);


