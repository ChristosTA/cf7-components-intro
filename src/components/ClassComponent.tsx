import {Component} from "react";

class ClassComponent extends  Component{
    render(){
        const title = "is a class component";
        return <h1 className="text-center mt-12 text-xl font-bold">{title}</h1>
    }

}

export default ClassComponent