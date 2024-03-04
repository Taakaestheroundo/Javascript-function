

function square(num){
    return num*num;

}
function squareNumbers(){
    for (let i=1; i<=10; i++){
        let squared = square(i)
        console.log("The square of" + i +" is:"+ squared)
    }
}
squareNumbers()

