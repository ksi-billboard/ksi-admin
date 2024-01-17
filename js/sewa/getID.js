import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleTableBill, singleTableBill1, singleTableBill2, singleTableSewa, singleTableSewa1, singleTableSewa2 } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

const dataBill  = (value) => {
    const data = singleTableBill
    .replace("#GAMBAR#", value.billboard.gambar)

    addInner("bill", data);

    console.log(value);
}

const dataBill1  = (value) => {
    const data = singleTableBill1
    .replace("#KODE#", value.billboard.kode)
    .replace("#NAMA#", value.billboard.nama)
    .replace("#PANJANG#", value.billboard.panjang)
    .replace("#LEBAR#", value.billboard.lebar)
    .replace("#HARGA#", value.billboard.harga)

    addInner("bill1", data);

    console.log(value);
}

const dataBill2  = (value) => {
    const data = singleTableBill2
    .replace("#REGENCY#", value.billboard.regency)
    .replace("#DISTRICT#", value.billboard.district)
    .replace("#VILLAGE#", value.billboard.village)
    .replace("#ADDRESS#", value.billboard.address)
    .replace("#LATITUDE#", value.billboard.latitude)
    .replace("#LONGITUDE#", value.billboard.longitude)

    addInner("bill2", data);

    console.log(value);
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
    .replace("#KTP#", value.user.ktp)
    .replace("#NAMA#", value.user.namalengkap)
    .replace("#EMAIL#", value.user.email)
    .replace("#NOHP#", value.user.nohp)

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


