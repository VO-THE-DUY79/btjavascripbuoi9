// tạo sự kiện khi nhấn vào button

const btn = document.getElementById("btn");
btn.onclick = function () {
    //bước 1:input
    // khai báo tỉ giá là 23500vnd ,lấy giá trị tiền đô được nhập từ input

    // bước 2: xử lý

    // khai báo lương một ngày:
    const tiGia = 23500;
    console.log(tiGia);

    // lấy giá trị tiền đô được người dùng nhập từ thẻ input:
    const btnInput = document.getElementById("money");
    const valueBtnInput = btnInput.value * 1;
    console.log(valueBtnInput);
    // tính thành tiền 
    let thanhTien = 0;
    thanhTien = tiGia * valueBtnInput;

    // bước 3:dom tới và thay đổi giá trị của thẻ span bởi giá trị thành tiền thông qua innerhtml
    document.getElementById("thanhTien").innerHTML = thanhTien;
};
