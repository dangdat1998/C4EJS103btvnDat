
let hour = 60*60
let day = hour*24
let year = day*365
console.log("Câu 1:")
console.log("1 giờ có "+ hour +" giây")
console.log("Câu 2:")
console.log("1 ngày có "+ day +" giây")
console.log("Câu 3:")
console.log("1 năm có "+ year +" giây")
let Uage = prompt('Câu 4: Nhập số tuổi của bạn',0)
alert("bạn đã sống được "  + (Uage*year) + " giây")
console.log("Câu 4:")
console.log("bạn đã sống được "  + (Uage*year) + " giây")
let a = prompt("Câu 5: Nhập a",0)
let b = prompt("Nhập b",0)
let c = prompt("Nhập c",0)
let d = prompt("Nhập d",0)
console.log("Câu 5:")
console.log("a="+a)
console.log("b="+b)
console.log("c="+c)
console.log("d="+d)

if (a>b)
{
    alert("a>b")
    console.log("a>b")
}
else if (a<b)
{
    alert("a<b")
    console.log("a<b")
}
else {
    alert("a=b")
    console.log("a=b")
    }
if (a>c)
{
    alert("a>c")
    console.log("a>c")
}
else if (a<c)
{
    alert("a<c")
    console.log("a<c")
}
else 
{
    alert("a=c")
    console.log("a=c")
}
if (a>d)
{
    alert("a>d")
    console.log("a>d")
}
else if (a<d)
{
    alert("a<d")
    console.log("a<d")
}
else 
{
    alert("a=d")
    console.log("a=d")
}
if (b>c)
{
    alert("b>c")
    console.log("b>c")
}
else if (b<c)
{
    alert("b<c")
    console.log("b<c")
}
else 
{
    alert("b=c")
    console.log("b=c")
}
if (b>d)
{
    alert("b>d")
    console.log("b>d")
}
else if (b<d)
{
    alert("b<d")
    console.log("b<d")
}
else 
{
    alert("b=d")
    console.log("b=d")
}
if (c>d)
{
    alert("c>d")
    console.log("c>d")
}
else if (c<d)
{
    alert("c<d")
    console.log("c<d")
}
else 
{
    alert("c=d")
    console.log("c=d")
}
// let age = prompt("Nhập số tuổi của bạn")
// alert("1 giờ có " + hour + " giây" )
// alert("1 ngày có " + 24*hour + " giây")
console.log("Câu 6")
let celsius = prompt("Câu 6: Nhập số độ C: ",0)
let F = celsius*1.8+32
alert(celsius+" độ C "+"="+F+" độ F")
console.log(celsius+" độ C "+"= "+F+" độ F")

console.log("Câu 7:")

let A=prompt("Câu 7: Nhập cạnh a",1)
console.log("cạnh a ="+A)

let B=prompt ( "Nhập cạnh b",1)
console.log("cạnh b ="+B)

let C=prompt ( "Nhập cạnh c",1)
console.log("cạnh c ="+C)
A=parseInt(A)
B=parseInt(B)
C=parseInt(C)
P = A+B+C
if (((A+B)>C) && ((A+C)>B) && ((B+C)>A))
{
    alert("Chu vi tam giác là " + P)
    console.log("Chu vi tam giác là " + P)
}
else 
{ 
    alert ("Đây không phải tam giác")
    console.log("Đây không phải tam giác")
}
function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(Word) 
        {
            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');
     }
console.log("Câu 8:")
let greeting="hello world"
console.log(toUpper(greeting))
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
let firstword=greeting.slice(0,5)
console.log(firstword)
let firstletter=greeting.slice(0,1)
console.log((firstletter))

console.log("Câu 9:")
let name = prompt("Điền tên bạn:","someone")
alert("Xin chào "+name)
console.log("Xin chào "+name)

console.log("Câu 10:")
console.log("Kiểu dữ liệu cảu 1 là: "+typeof 1)
console.log("Kiểu dữ liệu của Hello là: " +typeof "Hello")
console.log("Kiểu dữ liệu của true là: " +typeof true)
console.log("Kiểu dữ liệu của null là "+typeof null)
console.log("Kiểu dữ liệu của undefined là: "+typeof undefined)
