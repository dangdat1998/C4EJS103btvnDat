console.log("Bài 1:")
let dresser = ["sock","shirts","pant"]
console.log(dresser[1])
let odds = [1,3,5,7,9]
let sum=0
for (let i=0; i<5; i++)
{
    sum=sum+odds[i]
}
console.log("Bài 2:")
console.log(sum)
console.log("Bài 3:")
let firstname = "Neil"
let middlename ="deGrasse"
let lastname ="Tyson"
let Scientist = [firstname, middlename, lastname]
console.log(Scientist)
console.log("Bài 4:")
let people=["Teddy", "Cathy", "Bobby"]
people[1]="Peter"
console.log(people)
console.log("Bài 5:")
people.push("Barry")
console.log(people)
console.log("Bài 6:")
people.unshift("Alice")
console.log(people)
console.log("Bài 7:")
let people2 = people.slice(3,5)
console.log(people2)
people.pop()
people.pop()
people.push("John","James")
people=people.concat(people2)
console.log(people)
console.log("Bài 8:")
let James=["James",27]
people[4]=James 
console.log(people)
console.log("Bài 9:")
people.splice(4,1)
people.splice(2,1)
console.log(people)
console.log("Bài 10:")
console.log(people[Math.floor(Math.random()*7)])
console.log("Bài 11:")
let a="http://mindx.edu.vn/course/code-for-everyone"
let b =a.split("/")
console.log(b[2])
console.log(a.replace("code-for-everyone", "code every one"))
