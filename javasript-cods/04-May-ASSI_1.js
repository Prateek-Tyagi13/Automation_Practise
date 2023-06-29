function fulldetail(firstname,lastname){
    this.firstname=firstname,
    this.lastname=lastname,
    this.fullname=function(){
        return`${this.firstname}${this.lastname}`
    }
}
let fullname1=new fulldetail("Prateek  ","Tyagi");
console.log(fullname1.fullname());












