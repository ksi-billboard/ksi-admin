export const isiData = (results) => {
    console.log("isiData:", results);
    const inputMapping = [
      { id: "gambar", path: "gambar" },
      { id: "kode", path: "kode" },
      { id: "nama", path: "nama" },
      { id: "panjang", path: "panjang" },
      { id: "lebar", path: "lebar" },
      { id: "harga", path: "harga" },
      { id: "regency", path: "regency" },
      { id: "district", path: "district" },
      { id: "village", path: "village" },
      { id: "address", path: "address" },
      { id: "latitude", path: "latitude" },
      { id: "longitude", path: "longitude" },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      console.log("value:", value);
      if (inputElement.tagName === "IMG") {
        inputElement.src = value ? value : defaultImageUrl;
      } else {
        inputElement.value = value;
      }
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