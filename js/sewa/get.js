import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { tableSewa, tableSewaApprove } from "../temp/table.js";

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa"

const dataSewa  = (value) => {
    if (value.status) {
        const data = tableSewaApprove
        .replace("#GAMBAR#", value.content)
        .replace("#MULAI#", value.tanggal_mulai)
        .replace("#SELESAI#", value.tanggal_selesai)
        .replace("#ID#", value._id)
        .replace("#HAPUS#", value._id)

        addInner("tableAllSewa", data);

    } else {
        const data = tableSewa
        .replace("#GAMBAR#", value.content)
        .replace("#MULAI#", value.tanggal_mulai)
        .replace("#SELESAI#", value.tanggal_selesai)
        .replace("#ID#", value._id)
        .replace("#APPROVE#", value._id)

        addInner("tableAllSewa", data);
    }
}

const responseData = (result) => {
    if (result.status === 200) {
        console.log(result.data);
        result.data.forEach(dataSewa);
    }
}

getWithToken(target_url, responseData);
