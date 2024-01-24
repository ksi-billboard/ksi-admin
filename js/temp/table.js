export const tableBill = `
<ul class="job-listings mb-3">
  <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
    <a href="single-billboard.html?id=#ID#"></a>
    <div class="job-listing">
      <img src="#GAMBAR#" class="img-fluid rounded-0" style="width: 300px; height: 150px;"/>
    </div>

    <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
      <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
        <h2>#NAMA#</h2>
        <strong>#PANJANG# m x #LEBAR# m</strong>
      </div>
      <div class="job-listing-meta">
        <span class="badge badge-danger">Rp. #HARGA#</span>
      </div>
      <div class="job-listing-meta mx-4">
        <div class="job-listing-position">
          <a href="edit-billboard.html?id=#IDEDIT#" class="btn btn-warning flex-grow-1 ml-6" data-bill-id="#IDHAPUS#"></a>
          <a href="#" type="button" class="btn btn-danger flex-grow-1 ml-4" onclick="deleteBill('#HAPUS#')"></a>
        </div>
      </div>
    </div>
  </li>
</ul>
`;

export const singleTableBill = `
<td>
<img src="#GAMBAR#" class="img-fluid rounded-0" style="width: 450px; height: 280px;"/>
</td>
`;

export const singleTableBill1 = `
<td> #KODE# </td>
<td> #NAMA# </td>
<td> #PANJANG# m x #LEBAR# m </td>
<td> Rp. #HARGA# </td>
`;

export const singleTableBill2 = `
<td> #REGENCY# </td>
<td> #DISTRICT# </td>
<td> #VILLAGE# </td>
<td> #ADDRESS# </td>
<td> #LATITUDE# </td>
<td> #LONGITUDE# </td>
`;

export const tableSewa = `
<ul class="job-listings mb-3">
  <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
    <a href="single-sewa.html?id=#ID#"></a>
    <div class="job-listing">
      <img src="#GAMBAR#" class="img-fluid rounded-0" style="width: 300px; height: 150px;"/>
    </div>

    <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
      <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
        <h2><b>Tanggal Mulai : </b> #MULAI#</h2>
        <h2><b>Tanggal Selesai : </b> #SELESAI#</h2> 
        <a href="#" type="button" class="btn btn-success flex-grow-1 ml-4"></a>
      </div>
      
    </div>
  </li>
</ul>

`;

export const singleTableSewa = `
<td>
<img src="#GAMBAR1#" class="img-fluid rounded-0" style="width: 450px; height: 280px;"/>
</td>
`;

export const singleTableSewa1 = `
<td> #MULAI# </td>
<td> #SELESAI# </td>
`;

export const singleTableSewa2 = `
<td> #KTP# </td>
<td> #NAMA# </td>
<td> #EMAIL# </td>
<td> #NOHP# </td>
`;