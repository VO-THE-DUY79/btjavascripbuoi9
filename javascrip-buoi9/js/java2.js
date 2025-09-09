// tạo sự kiện khi nhấn vào button thành tiền

const btn = document.getElementById("btn");
btn.onclick = function () {
    //bước 1:input
    // nhập 5 số thực,giá trị tb TB

    // bước 2: xử lý

    // lấy giá trị số thứ nhất từ thẻ input chứa nó
    let so1 = document.getElementById("so1");
    let valueSo1 = so1.value * 1;
    console.log(valueSo1);

    // lấy giá trị số thứ 2 từ thẻ input chứa nó
    let so2 = document.getElementById("so2");
    let valueSo2 = so2.value * 1;
    console.log(valueSo2);

    // lấy giá trị số thứ 3 từ thẻ input chứa nó
    let so3 = document.getElementById("so3");
    let valueSo3 = so3.value * 1;
    console.log(valueSo3);

    // lấy giá trị số thứ 4 từ thẻ input chứa nó
    let so4 = document.getElementById("so4");
    let valueSo4 = so4.value * 1;
    console.log(valueSo4);

    // lấy giá trị số thứ năm từ thẻ input chứa nó
    let so5 = document.getElementById("so5");
    let valueSo5 = so5.value * 1;
    console.log(valueSo5);

    // tính giá trị trung bình
    let TB = 0;
    TB = (valueSo1 + valueSo2 + valueSo3 + valueSo4 + valueSo5) / 5;

    // bước 3:dom tới và thay đổi giá trị của thẻ span bởi giá trị TRUNG BÌNH  thông qua inner
    document.getElementById("TB").innerHTML = TB;
};
