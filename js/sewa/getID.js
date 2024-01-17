import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleTableBill, singleTableBill1, singleTableBill2, singleTableSewa, singleTableSewa1, singleTableSewa2 } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

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

const dataSewa  = (value) => {
    const data = singleTableSewa
    .replace("#GAMBAR1#", value.content)

    addInner("sewa", data);
}

const dataSewa1  = (value) => {
    const data = singleTableSewa1
    .replace("#MULAI#", value.tanggal_mulai)
    .replace("#SELESAI#", value.tanggal_selesai)

    addInner("sewa1", data);
}

const dataSewa2  = (value) => {
    const data = singleTableSewa2
    .replace("#NIK#", value.nik)
    .replace("#NAMA#", value.namalengkap)
    .replace("#EMAIL#", value.email)
    .replace("#NOHP#", value.nohp)

    addInner("sewa2", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        dataBill(result.data);
        dataBill1(result.data);
        dataBill2(result.data);
        dataSewa(result.data);
        dataSewa1(result.data);
        dataSewa2(result.data);
    }
}

getWithToken(target_url, responseData);


