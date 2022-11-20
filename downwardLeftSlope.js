let times =  6
for (let i =times-times+1 ; i <= times ;i++){
    
    let pattern = ""
    for (let k = 0; k <= i ; k++) {
        pattern = pattern + " "
    }
    for (let j = 0; j <=times-i ; j++) {
        pattern = pattern + " *"
    }
    

    console.log(pattern)
}