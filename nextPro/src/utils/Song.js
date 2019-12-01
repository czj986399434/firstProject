function User(x){
  this.name=x;
  this.getName=function(){
    return this.name;
  }
  this.aaa=function(){
    console.log(this.name)
  }
}
//使用类
const base=new User("aaa");
export default base
