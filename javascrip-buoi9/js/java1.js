// tạo sự kiện khi nhấn vào button thành tiền

const btn = document.getElementById("btn");
btn.onclick = function () {
    //bước 1:input
    // lương một ngày ,số ngày làm việc được lấy giá trị từ thẻ input

    // bước 2: xử lý

    // khai báo lương một ngày:
    const luongMotNgay = 100000;
    console.log(luongMotNgay);

    // lấy giá trị số ngày làm việc được người dùng nhập từ thẻ input:
    const btnInput = document.getElementById("soNgayLam");
    const valueBtnInput = btnInput.value * 1;
    console.log(valueBtnInput);
    // tính tổng lương
    let tongLuong = "";
    tongLuong = (luongMotNgay * valueBtnInput);

    // bước 3:dom tới và thay đổi giá trị của thẻ span bởi giá trị tổng lương thông qua innerhtml
    document.getElementById("tongLuong").innerHTML = tongLuong;
};
