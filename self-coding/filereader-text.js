function readfile(input){
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsText(file)

    reader.onload = function(){
        console.log(reader.result)
    }
    reader.onerror = ()=>{
        console.log(reader.error)
    }
}