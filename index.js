console.log ()
let counter = 0


function incrementButton () {
console.log("clicked")
counter = counter + 1
console.log(counter)

}





function totalLapTime (){
    console.log (lap1+lap2+lap3)
    let totalTime = lap1 + lap2 +lap3 //defined variables in scope, only exists in that function
    console.log(totalTime)
    
    
}
totalLapTime()




countdown()