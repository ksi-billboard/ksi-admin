import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const approveSewa = async (APPROVE) => {
  const id = APPROVE;
  const token = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    text: "Benarkah anda ingin approve data ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Benar",
    cancelButtonText: "Tidak",
  });

  if (isConfirmed.isConfirmed) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

    try {
      const response = await fetch(target_url, {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          text: response.message,
          showConfirmButton: false,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.approveSewa = approveSewa;