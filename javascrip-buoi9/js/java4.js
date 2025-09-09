// tạo sự kiện khi nhấn vào button

const btn = document.getElementById("btn");
btn.onclick = function () {
    //bước 1:input
    // chiều dài , chiều rộng lấy từ thẻ input

    // bước 2: xử lý

    // lấy giá trị chiều dài được người dùng nhập từ thẻ input:
    const chieuDai = document.getElementById("chieuDai");
    const valueChieuDai = chieuDai.value * 1;
    console.log(valueChieuDai);

    // lấy giá trị chiều rộng được người dùng nhập từ thẻ input:
    const chieuRong = document.getElementById("chieuRong");
    const valueChieuRong = chieuRong.value * 1;
    console.log(valueChieuRong);

    // tính diện tích:
    let dienTich = 0;
    dienTich = valueChieuDai * valueChieuRong;

    // tính chu vi:
    let chuVi = 0;
    chuVi = (valueChieuDai + valueChieuRong) * 2;

    // bước 3:dom tới và thay đổi giá trị của thẻ span bởi giá trị diện tích và chu vi thông qua innerhtml
    document.getElementById("dt").innerHTML = dienTich;
    document.getElementById("cv").innerHTML = chuVi;
};
