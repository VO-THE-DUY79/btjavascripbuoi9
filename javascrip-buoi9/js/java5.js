// gắn hàm function cho sự kiện onclick vào button
document.getElementById("btn").onclick = function () {
    // bước 1: input
    // nhập số có 2 chữ số:kiểu number

    // bước 2: xử lý
    let so = document.getElementById("so");
    console.log(so);
    let valueSo = so.value * 1;
    console.log(valueSo);

    // lấy giá trị hàng chục
    let hangChuc = Math.floor(valueSo / 10);
    console.log("số hàng chục:",hangChuc);

    // lấy giá trị hàng đơn vị
    let hangDonVi = valueSo % 10;
    console.log("số hàng đơn vị:",hangDonVi);

    // tính tổng :
    tong = hangChuc + hangDonVi;
    console.log("tổng hai số:",tong);

    // b3:gán giá trị của tổng vào thẻ span qua inner
    document.getElementById("tong").innerHTML = tong;
};
