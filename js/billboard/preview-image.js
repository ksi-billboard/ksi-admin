document.getElementById("gambar").addEventListener("change", function() {
    var input = this;
    var preview = document.getElementById('previewimage');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Menampilkan gambar di bawahnya
            preview.innerHTML = '<img src="' + e.target.result + '" id="imageupdate" alt="Preview Gambar" style="max-width: 300px; max-height: 300px;">';
        };

        reader.readAsDataURL(input.files[0]);
    }
});