function triangle(height : number){
    for(let i: number = 1; i <= height ; i++){
        let line: string = ""
        for (let j: number =1; j <= i; j++){
            line += j
            if (j < i){
                line += ""
        }    }
    }
}

{
    function triangle (height : number){
        let num : number = 1

        for (let i: number = 1; i <= height; i++){
            let line: string =""
            for (let j: number =1; j <= i ; j++){
                if (num < 10){
                    line += "0" + num 
                }else {
                    line += num 
                }
                if (j < i){
                    line += ""
                }
                num ++
            }
            console.log(line)
        }
    }
    triangle(5)
}

{
    function removenumber (target : number[]){
        let result : number [] = []
        for (let i: number = 0; i < target.length; i++){
            if (target [i] ! % 2 === 0){
                result.push(target[i])
            }
        }
        return result
    }

    console.log(removenumber([1,2,3,4,5,6,7,8,9]))
}