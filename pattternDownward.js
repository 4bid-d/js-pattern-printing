let times =  5

for (let i = 0; i < times; i++) {

    let pattern = ""
    for (let j = 0; j <times-i ; j++) {
        
        // console.log("hi")
        pattern = pattern + "* "
    }
    console.log(pattern)
}