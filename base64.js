function previewImage(file) {
    var target = file.name;
    if (file.files && file.files[0]) {
        var reader = new FileReader();
        reader.onload = function (evt) {
            console.log(evt.target.result)//即图片，此处可进行预览操作
        }
        return reader.readAsDataURL(file.files[0]);
    }
}