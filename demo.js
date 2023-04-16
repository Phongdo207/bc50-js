document.getElementById("btnTinhtien").onclick = function(){
    var luongMotNgay = document.getElementById("luongMotNgay").value * 1;
    var songayLam = document.getElementById("songayLam").value * 1;

    var luong = luongMotNgay * songayLam;

    var result = "Tổng lương : " + luong;
    

    document.getElementById("tinhTienLuong").innerHTML = result;
    console.log(result);
}

document.getElementById("btnTinhTB").onclick = function(){
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;

    var tbcong = (so1 + so2 + so3 + so4 + so5) / 5;

    var result = "Kết quả : " + tbcong;
    document.getElementById("tinhKQ").innerHTML = result;
    console.log(result);
}

document.getElementById("btnThanhTien").onclick = function(){
    var giaUsd = document.getElementById("giaUsd").value*1;
    var giaVnd = document.getElementById("giaVnd").value*1;

    var giaTien = giaUsd * giaVnd;
    var fomat = new Intl.NumberFormat("vn-VN");

    var result = "Thành tiền : " + fomat.format(giaTien) + " VND";

    document.getElementById("tinhThanhTien").innerHTML = result;
    console.log(result);
}

document.getElementById("btnTinhHCN").onclick = function(){
    var cD = document.getElementById("cD").value *1;
    var cR = document.getElementById("cR").value *1;

    var chuVi = (cD + cR)*2;
    var dienTich = cD * cR;

    var result = "Chu vi = " + chuVi + " --  Diện tích = " + dienTich;
    document.getElementById("tinhKqHCN").innerHTML = result;
    console.log(result);
}

document.getElementById("btnTong").onclick = function(){
    var number = document.getElementById("number").value * 1;
    var soDV = Math.round(number / 10);
    var soHC = number % 10;

    var tong = soDV + soHC;
    console.log(soDV);
    console.log(soHC);
    console.log(tong);
}