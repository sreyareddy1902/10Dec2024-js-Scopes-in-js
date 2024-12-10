
//scopes in js
/*----------private scope
let employee=(function(){
    //private variable
    let empName=''

    return class{  //to access private  variable
        constructor(name)
        {
            empName=name
        }
        //private method
        getPrivateName()
        {
            return empName
        }
    }   
})();

let e1=new employee('john')
console.log(e1.getPrivateName())
-----*/

/*----public scope
let empName='john' //global scope
class employee{
    constructor()
    {
        this.getName=function()
        {
            return empName
        }
    }
}
let e1=new employee()
console.log(e1.getName())
-----*/

/*----protected scope
let protectedMap=new WeakMap()
class person
{
    constructor(name)
    {
        protectedMap.set(this,{
            name
        })
    }
    //protected method
    getName(){
        return protectedMap.get(this).name
    }
}

class employee extends person{
    constructor(name,role)
    {
        super(name)
       protectedMap.get(this).role=role
    }
    getRole()
    {
        return protectedMap.get(this).role
    }
    
}

let e1=new employee('john','manager')
console.log(e1.getName())
console.log(e1.getRole())
------*/
