import React from 'react'

class BoardMembersTable extends React.Component{

    constructor(props){
        super(props)
        this.state={
            boardMembers:["Adam Smith","Nicola Tesla","Madam Curie"],
            dublicateMsg_BM:'',
            dublicateError_BM:'',
            dublicateWarning_BM:'',
            addMemberMessage:'',
            removeMemberCheck:'',
            enableRemoveMember:true, 
            enableEditingMember:true,
            trInputStyle_BM:true,
            currentlyEditing_BM:false  
        }
    }

    AddBoardMember = (e) => {
        e.preventDefault()
        let value = document.getElementById('newboardmember').value
        if(value.length > 3){
            this.setState(()=>{
                return{
                    boardMembers:[
                        ...this.state.boardMembers,
                        value
                    ],
                    addMemberMessage:''
                }
            })
        }else{
            this.setState(()=>{
                return{
                    addMemberMessage:'Name Must be At Least 4 Characters Long'
                }
            })
        }
        document.getElementById('newboardmember').value=""
    }


    checkTheDublicates_BoardMember = (e) => {
        const value = document.getElementById('newboardmember').value
        //console.log("value1:"+value);        
        

        if(this.state.boardMembers.includes(value)){
            //console.log("dublicate");
            document.getElementById('addboardmember').disabled = true
            this.setState(()=>{
                return{
                    dublicateError_BM:`You Are Trying To Add "${value}" To The List But A Board Member With The Same Name Already Exists In The Board Members List.`
                }
            })
            

           

        }else{
            document.getElementById('addboardmember').disabled = false
            this.setState(()=>{
                return{
                    dublicateError_BM:""
                }
            })
        }


        let dublicates = []
        let dublicatesString = ""
        this.state.boardMembers.map((member)=>{

            if(member.includes(value) || value.includes(member)){
               //console.log("value2:"+value);
               dublicates.push(member)
               
               dublicatesString = dublicates.toString()
               //console.log("dublicatesString"+dublicatesString);
            }
   
       })

       if(dublicates.length > 0){
        this.setState(()=>{
            return{
                dublicateWarning_BM: value !== " " && value !== ""  && `The Name "${value}" Is Very Similar to An/A Few Existing Member/s: ${dublicatesString}`
            }
            })
       }else{
        this.setState(()=>{
            return{
                dublicateWarning_BM:""
            }
            })
       }
      
    }


    

    enableRemoveButtons_BM = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableRemoveMember:!prevState.enableRemoveMember
            }
        })
    }

    enableEditingButtons_BM = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableEditingMember:!prevState.enableEditingMember,
                
            }
        })

    }


    removeMember = (event,mem) => {
        event.preventDefault()
        
        this.setState(()=>{
            return{
                boardMembers:this.state.boardMembers.filter((member)=>{
                    return member !== mem
                })
            }
        }) 
        
    }
    //--------------------------------------------------------------------------------------------------------Working On

    editMember = (event, mem)=>{
        event.preventDefault()
        this.setState(()=>{
            return{
                currentlyEditing_BM:true
            }
        })
        document.getElementById(mem).disabled = false
        document.getElementById(mem).style.background = "yellow"

        this.terminateEditing(mem)
    }

    terminateEditing = (mem) => {
        const newMember = document.getElementById(mem).value

        if(mem !== "" && mem !== " " && mem !== newMember){

            let index = this.state.boardMembers.indexOf(mem)

            let currentMembers = this.state.boardMembers
            currentMembers[index]=newMember 

            this.setState(()=>{
                return{
                    boardMembers:currentMembers,
                    currentlyEditing_BM:false
                }
            })

            document.getElementById(mem).disabled = true
        }
    }


    render(){
        return(
            <div className="container mt-5 p-5 border">
            <p className="display-2 text-center">Board Members</p>
                <div className="row float-end mb-5 p-2 border">
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateRemoveButtons3" onChange={this.enableRemoveButtons_BM}/>
                            <label className="form-check-label" htmlFor="activateRemoveButtons3">Enable Removing Board Members</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateEditButtons3" onChange={this.enableEditingButtons_BM}  disabled={this.state.currentlyEditing_BM}/>
                            <label className="form-check-label" htmlFor="activateEditButtons3">Enable Editing Board Members</label>
                        </div>
                    
                                        
                </div>
      

                <div className="row">
                     <h2>Number Of Board Members: -<strong>{this.state.boardMembers.length}-</strong></h2>

                </div>

                <br></br>
                {this.state.enableRemoveMember === false && <div className="alert alert-danger my-5">
                                                <p>Be Carefull, <strong>Remove Buttons</strong> Are Activated!!!</p>
                                            </div>}
                {this.state.enableEditingMember === false && <div className="alert alert-danger my-5">
                                            <p>Be Carefull, <strong>Editing Buttons</strong> Are Activated!!!</p>
                                            </div>}
          
                

                <table className="table table-striped table-hover table-responsive" >
                    
                    <thead>
                        <tr>
                            <th scope="col" key="1" style={{width:'5%'}}>#</th>
                            <th scope="col" key="2" style={{width:'85%'}}>Proje</th>
                            <th scope="col" key="3" style={{width:'5%'}}>Remove</th>
                            <th scope="col" key="4" style={{width:'5%'}}>Edit</th>

                            

                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.boardMembers.map((member)=>{
                        return(
                            <tr key={member}>
                                <th scope="row" >{this.state.boardMembers.indexOf(member) + 1}</th>
                                <td ><div><input className="from-control border-0 col-12" 
                                style={this.state.trInputStyle_BM === true ? {background:"transparent"}:{color:"red"}} 

                                defaultValue={member} id={member} disabled /></div></td>

                                <td ><button 
                                className="btn btn-danger btn-lg"
                                value={member}
                                id="removeProject"
                                onClick={(event)=>{
                                    this.removeMember(event,member)
                                }}
                                disabled={this.state.enableRemoveMember}

                                >
                                <i className="fas fa-trash-alt" ></i></button></td>

                                <td ><button 
                                    type="submit" 
                                    className="btn btn-secondary btn-lg" 
                                    id="editProject"
                                    onClick={(event)=>{
                                        this.editMember(event,member)
                                    }}
                                    disabled={this.state.enableEditingMember}
                                ><i className="far fa-edit"></i></button></td>     
                            </tr>
                        )
                        })
                    }
                   

                        
                    </tbody>
                </table>

                <br></br>
                <div className="row">
                    <div className="col-sm-9">
                        <input className="form-control" type="text" id="newboardmember" onChange={this.checkTheDublicates_BoardMember} placeholder="Case Sensitive"/>
                    </div>
                    <div className="col-sm-3">
                        <button type="submit"  className="btn btn-primary btn-lg col-12" id="addboardmember" onClick={this.AddBoardMember} >Add Board Member</button>
                    </div>
                </div>
                
                    {this.state.dublicateError_BM && <div className="alert alert-danger my-4 py-4" role="alert">{this.state.dublicateError_BM}</div>}
                    {this.state.dublicateWarning_BM && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.dublicateWarning_BM}</div>}
                    {this.state.addProjectMessage && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.addProjectMessage}</div>}
                    
                    
            </div>
        )
    }
}


export default BoardMembersTable


