export const isiData = (results) => {
  console.log("isiData:", results);
  const inputMapping = [
    // { id: "gambar", path: "data.gambar" },
    { id: "kode", path: "data.kode" },
    { id: "nama", path: "data.nama" },
    { id: "panjang", path: "data.panjang" },
    { id: "lebar", path: "data.lebar" },
    { id: "harga", path: "data.harga" },
    { id: "regency", path: "data.regency" },
    { id: "district", path: "data.district" },
    { id: "village", path: "data.village" },
    { id: "address", path: "data.address" },
    { id: "latitude", path: "data.latitude" },
    { id: "longitude", path: "data.longitude" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    console.log("value:", value);

    // const fileName = extractFileNameFromUrl(value);
    // const fileNameElement = document.getElementById("gambar");
    // fileNameElement.textContent = fileName;
    // console.log("fileName:", fileName);

    inputElement.value = value;
    
  });
};

const getNestedValue = (obj, path, index, property) => {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
};

// Fungsi untuk mengekstrak nama file dari URL
// function extractFileNameFromUrl(url) {
//   const pathArray = url.split('/');
//   const fileName = pathArray[pathArray.length - 1];
//   const fileNameWithoutExtension = fileName.split('.')[0];
//   return fileNameWithoutExtension;
// }