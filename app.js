//for in va for of:
let list = [4,5,6,8];
for (let i in list){
    console.log(i);
}
// 0,1,2
for (let i of list){
    console.log(i);
}
// chuc nang indexof
let text = "Quoc khanh,Hai Dang, Dang Hoang, Tram ";
let result = text.indexOf("Dang Hoang");
console.log(result);

/*
Bài tập: Một nhà hàng gặp khó khăn trong việc quản lý menu order.
Xây dựng chương trình Order gồm những tính năng sau:
mặc định: trong menu luôn có 3 món ban đầu là:
let menu = [];
Cho người dùng nhập vào: C,R,U,D trong đó:
- C: Create => Thêm 1 món ăn mới vào menu
- R: Read => Hiển thị ra những món đã order (trong mảng menu)
- U: Update => Nhập tên món muốn thay thế (nhập không đúng món bắt nhập lại hoặc thoát nếu không muốn)
=> "Nhập tên món mới"
- D: Delete => Nhập tên món muốn delete (nhập không đúng thì nhập lại hoặc thoát ra)
=> xóa món đó trong menu.
*/

let menu = [];
let n = prompt("Nguoi dung nhap mon an:");
n = Number(n);
let i = 1
do {
    let x = prompt (`moi nguoi dung nhap mon an thu ${i}`);
    menu.push(x);
    i = i + 1;
}
while (i <= n);

console.log ("Menu món ăn hiện tại là:", menu);
let input;

do {
    input = prompt("Moi nguoi dung nhap C,R,U,D ");
    if (input == 'c'){
        menu.push(prompt("Moi nguoi dung nhap mon an can` them"));
        console.log("Menu mon an sau khi them la:", menu);
        } 
    else if (input == 'r'){
        console.log("Menu mon an sau khi them la:", menu);
    }
        // tim duoc vi tri cua phan tu minh` muon cap nhap(update)
    else if (input == 'u'){

        let vitriUpdate = menu.indexOf(prompt("Nguoi` dung nhap mon muon cap nhap") )
        menu[vitriUpdate] = prompt("Người dùng cập nhập món ăn mới thay thế cho món cũ: ")
        console.log("Menu mon an sau khi cap nhap la:" ,menu);
    }
    else if (input == 'd'){
        let vitriDelete = menu.indexOf(prompt("Người dùng nhập món ăn muốn xoá:"));
        menu.splice(vitriDelete, 1);
        console.log("Menu món ăn sau khi xoá là:", menu);
    }
    else {
        alert("Không tồn tại lựa chọn nào -> bye bye bạn yêu");
    }

        
    
}
while (input == 'c' || input == 'r' || input == 'u' || input == 'd');
