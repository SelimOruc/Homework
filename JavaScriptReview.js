function sum (a,b,c)
{
    return a + b + c ;
}

function letter (a)

{
    for (i = 0; i < a.length; i ++)
    {
        var word = a[i]
        
    }
    console.log(word)
}


function cube(a)

{
    return a * a * a
}



function reverse(word) 
{
    var revword = ''
    for(var i = word.length -1; i >= 0; i--) {
         revword += word[i]  
    }
    console.log(revword)
}

reverse("keesje")

function test (a,b)
{

    if (a.length == b.length)
    {
    var obj = {}

    for (var i = 0; i < a.length; i++)
    {
        obj[a[i]] = b[i]
    }
    console.log(obj)
    }   
    else 
    {
        console.log ("arrays do not have the same length")
    } 

 
 }
 
 test(["kees","pit","hassan"],["10","9","100"])
 

 

myObject =  { 
		shagoron: "hinnnummunninnmmin",
		pitbull: "wat random woorden en een hele tekst dat ik nie begrijp maar clipjes lkkre chicks dayummm"
            }
		function test1(object){ 
			var newObject = {
		keys: [],
		values: []
		}
				for (var key in object){
				newObject.keys.push(key)
				newObject.values.push(object[key])
			}
			return newObject
		}
		console.log ( test1 ( myObject ))
