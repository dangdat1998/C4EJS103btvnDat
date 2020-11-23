// Array
console.log("Array")
console.log("Câu 1")
let colors=["red","green","yellow","black","pink"]
console.log("Câu 2")
console.log(colors[0])
console.log("Câu 3")
console.log(colors[2])
console.log("Câu 4")
colors[4]="ultraviolet"
console.log(colors)
console.log("Câu 5")
let fourthColor = colors[3]
console.log(fourthColor)
console.log("Câu 6")
colors.push("orange")
console.log(colors)
console.log("Câu 7")
colors.unshift("white")
console.log(colors)
console.log("Câu 8")
console.log(colors.length)
console.log("Câu 9")
colors.pop()
console.log(colors.length)
console.log("Câu 10")
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}
console.log("Câu 11")
for(let i=0;i<colors.length;i++)
{
    console.log(i+". "+colors[i])
}
console.log("Câu 12")
let lastColor=colors[colors.length-1]
console.log(lastColor)
console.log("")
console.log("Object")
console.log("Câu 1")
let myPenguin = 
{
    character: "Clothahump",
    origin: "Spellsinger",
    author: "Alan Dean Foster",
    notes: "Aged turtle wizard."
}
console.log(myPenguin)
console.log("Câu 2")
console.log("Hello, I'm a penguin and my name is "+myPenguin.character)
console.log("Câu 3")
myPenguin.canFly=false
console.log(myPenguin)