import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const approveSewa = (APPROVE) => {
    const id = APPROVE;

    console.log("ID Parameter:", id);

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;
    
    putData(target_url, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result, result.status);
    if (result.status === 200) {
        Swal.fire({
            icon: "success",
            // title: "Approve Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list-sewa.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            // title: "Approve Failed",
            text: result.message,
        });
    }
}

function putData(target_url, responseFunction) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
  };

  fetch(target_url, requestOptions)
      .then(response => response.text())
      .then(result => responseFunction(JSON.parse(result)))
      .catch(error => console.log('error', error));
}

window.approveSewa = approveSewa;