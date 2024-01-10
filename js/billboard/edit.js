export const isiData = (results) => {
  console.log("isiData:", results);

  const inputMapping = [
    { id: "gambar", path: "data", property: "gambar"},
    { id: "kode", path: "data", property: "kode" },
    { id: "nama", path: "data", property: "nama" },
    { id: "panjang", path: "data", property: "panjang" },
    { id: "lebar", path: "data", property: "lebar" },
    { id: "harga", path: "data", property: "harga" },
    { id: "regency", path: "data", property: "regency" },
    { id: "district", path: "data", property: "district" },
    { id: "village", path: "data", property: "village" },
    { id: "address", path: "data", property: "address" },
    { id: "latitude", path: "data", property: "latitude" },
    { id: "longitude", path: "data", property: "longitude" },
  ];

  inputMapping.forEach((input) => {
    const value = getNestedValue(results, input.path, 0, input.property);
    console.log("value:", value);
    document.getElementById(input.id).value = value;
  });
}

const getNestedValue = (obj, path, defaultValue, property) => {
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result[property];
};

