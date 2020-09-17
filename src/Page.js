import React from "react";
import Title from "./components/Title";
import List from "./components/List";
import packInfo from './packInfo';
import './Page.css';

class Page extends React.Component {       

    constructor(props) {
        super(props);
        this.state = {
            presents: packInfo
        }
    }     

    ActivePackOnClick(additive, event) {
        const presents = this.state.presents.concat()          
        const present = presents.find(elem => elem.additive === additive)
        this.setState({presents}) 
        present.marked = !present.marked            
        if (present.packState.includes("pack--disabled")) {
            present.packState.splice()
        } else {
            if (present.marked) {
                present.packState.splice(1,2,"pack--default") 
                event.currentTarget.blur()               
            } else {
                present.packState.splice(1,1,"pack--selected")                                     
                if (event.currentTarget.className === "assortment__item-buy") { 
                    present.packState.push("pack--selected-hover")                    
                }          
            }
        }
    }

    ActivePackOnKeyDown(additive, event) {
        const presents = this.state.presents.concat()          
        const present = presents.find(elem => elem.additive === additive)
        this.setState({presents}) 
        if(event.keyCode === 13) { 
            present.marked = !present.marked            
            if (present.packState.includes("pack--disabled")) {
                present.packState.splice()
            } else {
                if (present.marked) {
                    present.packState.splice(1,2,"pack--default")                    
                } else {
                    present.packState.splice(1,1,"pack--selected")                
                    if (event.currentTarget.className === "assortment__item-buy") { 
                        event.currentTarget.parentNode.parentNode.previousElementSibling.focus()   
                    }          
                }
            }
        }
        if(event.keyCode === 9 && present.packState.includes("pack--selected")) {            
            if (present.packState.includes("pack--selected-hover")) {
                present.packState.splice()                
            } else {
                present.packState.push("pack--selected-hover")
                event.currentTarget.blur()
            }            
        }
    }

    hoverMouseLeave(additive, event) {
        const presents = this.state.presents.concat()          
        const present = presents.find(elem => elem.additive === additive)
        this.setState({presents})
        if (event.type ==="mouseleave" && present.packState.includes("pack--selected")) {
            if (present.packState.includes("pack--selected-hover")) {
                present.packState.splice()             
            } else {
                present.packState.push("pack--selected-hover")
                event.currentTarget.blur()
            }
        }        
    }

    render() {
        return (
            <section className="assortment">
                <div className="container">            
                    <Title />
                    <div className="assortment__list">
                        {this.state.presents.map(present =>  {           
                            return (
                                <List  
                                    present = {present}
                                    presents = {this.state.presents}
                                    key = {present.additive}
                                    ActivePackOnClick = {this.ActivePackOnClick.bind(this, present.additive)}
                                    ActivePackOnKeyDown = {this.ActivePackOnKeyDown.bind(this, present.additive)}
                                    hoverMouseLeave = {this.hoverMouseLeave.bind(this, present.additive)}                                                                
                                />                
                            )
                        })}                                 
                    </div>  
                </div>  
            </section>  
        );
    }
}

export default Page;