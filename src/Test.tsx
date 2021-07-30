import React from 'react';
import logo from './logo.svg';
import './App.css';

interface t{
    t1:string
}
function Test(props:t) {
  const name:string = "asd";
    console.log(name);
    console.log(props.t1);
    interface t1{
      name:string;
      age?:number;
      [index:number]:string;
      hello():string
    }
    class t2<T>{
      private _name:string = "";
      age?:T;
      constructor(name:string, age:T){
        this._name = name;
        this.age = age;
      }
      get name():string{
        return this._name;
      }
      set name(name:string){
        this._name = name;
      }
      print():void {
        console.log(`name = ${this.name}\nage = ${this.age}`);
      }
    }
    function firstDecorator(param:any) {
      console.log('factory');
      return function(target:any, name:string) {
          console.log('decorator');
      }
  }
  
  class SomeClass {
      @firstDecorator(123)
      prop = 'a';
  }
  
  console.log('인스턴스가 만들어지기 전');
  console.log(new SomeClass());
  
    const test:t2<number> = new t2("asd", 12);
    test.print();
    console.log(test.name);
    test.name = "setter";
    console.log(test.name);
    function t1_1(p : t1){
      console.log(`p.name = ${name}`);
    }
    t1_1({name:"t1 test", hello:function(){
      return "hello";
    }});
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default Test;
