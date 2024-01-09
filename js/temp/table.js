export const tableBill = `
<li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
<a href="single-billboard.html?id=#ID#"></a>
<div class="job-listing-logo">
  <img src="#GAMBAR#" alt="Free Website Template by Free-Template.co" class="img-fluid" />
</div>

<div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
  <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
    <h2>#NAMA#</h2>
    <strong>#PANJANG# x #LEBAR#</strong>
  </div>
  <div class="job-listing-meta">
    <span class="badge badge-danger">Rp. #HARGA#</span>
  </div>
</div>
</li>
`;

export const singleTableBill = `
<td>
<img src="#GAMBAR#" alt="Free Website Template by Free-Template.co" class="img-fluid" />
</td>
<td> #KODE# </td>
<td> #NAMA# </td>
<td> #PANJANG# x #LEBAR# </td>
<td> Rp. #HARGA# </td>
`;

export const singleTableBill2 = `
<td> #REGENCY# </td>
<td> #DISTRICT# </td>
<td> #VILLAGE# </td>
<td> #ADDRESS# </td>
<td> #LATITUDE#, #LONGITUDE# </td>
`;