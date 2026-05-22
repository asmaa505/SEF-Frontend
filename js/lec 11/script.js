


let names = ["asmaa" , "mirit" , "pearla" , "noor" ];

let logic = function(arr , char)
{

    let a_result = arr.map( (item) => item.indexOf(char) ) ;

    console.log( a_result );

}

logic(names , "a");









