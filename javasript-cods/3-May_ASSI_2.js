const marks={
    sub1:54,
    sub2:57,
    sub4:83,
    sub3:67,
    sub5:55,
    percentage:function(){
     let f=(this.sub1+this.sub2+this.sub3+this.sub4+this.sub5)/500
     let per=f*100
     return per
    },
    grade:function(){
        if((this.percentage()>10)&&(this.percentage()<=50)){
            console.log("grade c")
        }
        else if((this.percentage()>=50)&&(this.percentage()<=80)){
            console.log("grade b")
        }
        else{
            console.log("grade a")
        }
    }
}
console.log(marks.percentage())
marks.grade()

