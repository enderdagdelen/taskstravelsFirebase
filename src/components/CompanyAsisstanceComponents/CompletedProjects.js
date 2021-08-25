import React from 'react'

class CompletedPrjectsTable extends React.Component{

    constructor(props){
        super(props)
        this.state={
            projects_CP:["Kar HES","Muş Karasu Regülatörü","Bingöl Merkez Sulaması"],
            dublicateMsg_CP:'',
            dublicateError_CP:'',
            dublicateWarning_CP:'',
            addProjectMessage_CP:'',
            removeProjectCheck_CP:'',
            enableRemoveProjects_CP:true, 
            enableEditingProjects_CP:true,
            trInputStyle_CP:true,
            currentlyEditing_CP:false 
        }
    }

    AddCompletedProject = (e) => {
        e.preventDefault()
        let value = document.getElementById('completedproject').value
        if(value.length > 3){
            this.setState(()=>{
                return{
                    projects_CP:[
                        ...this.state.projects_CP,
                        value
                    ],
                    addProjectMessage_CP:''
                }
            })
        }else{
            this.setState(()=>{
                return{
                    addProjectMessage_CP:'Project Must be At Least 4 Characters Long'
                }
            })
        }
        document.getElementById('completedproject').value=""
    }


    checkTheDublicates_CompletedProjects = (e) => {
        const value = document.getElementById('completedproject').value
        //console.log("value1:"+value);        
        

        if(this.state.projects_CP.includes(value)){
            //console.log("dublicate");
            document.getElementById('addcompletedproject').disabled = true
            this.setState(()=>{
                return{
                    dublicateError_CP:`${value} Project Already Exists In The Projects Folder.`
                }
            })
            

           

        }else{
            document.getElementById('addcompletedproject').disabled = false
            this.setState(()=>{
                return{
                    dublicateError_CP:""
                }
            })
        }


        let dublicates = []
        let dublicatesString = ""
        this.state.projects_CP.map((completedproject)=>{

            if(completedproject.includes(value) || value.includes(completedproject)){
               //console.log("value2:"+value);
               dublicates.push(completedproject)
               
               dublicatesString = dublicates.toString()
               //console.log("dublicatesString"+dublicatesString);
            }
   
       })

       if(dublicates.length > 0){
        this.setState(()=>{
            return{
                dublicateWarning_CP: value !== " " && value !== ""  && `The Phrase ${value} is similar to A Completed Project: ${dublicatesString}`
            }
            })
       }else{
        this.setState(()=>{
            return{
                dublicateWarning_CP:""
            }
            })
       }
      
    }


    

    enableRemoveButtons_CP = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableRemoveProjects_CP:!prevState.enableRemoveProjects_CP
            }
        })
    }

    enableEditingButtons_CP = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableEditingProjects_CP:!prevState.enableEditingProjects_CP,
                
            }
        })
    }


    removeCompletedProject = (event,prj) => {
        event.preventDefault()
        
        this.setState(()=>{
            return{
                projects_CP:this.state.projects_CP.filter((completedproject)=>{
                    return completedproject !== prj
                })
            }
        }) 
        
    }
    //--------------------------------------------------------------------------------------------------------Working On

    editCompletedProject = (event, comp_prj)=>{// prj - comp_prj
        event.preventDefault()

        this.setState(()=>{
            return{
                currentlyEditing_CP:true
            }
        })

        document.getElementById(comp_prj).disabled = false
        document.getElementById(comp_prj).style.background = "yellow"

        const completedProject = document.getElementById(comp_prj).value

        if(comp_prj !== "" && comp_prj !== " " && comp_prj !== completedProject){

            let index = this.state.projects_CP.indexOf(comp_prj)

            let completedProjects = this.state.projects_CP
            completedProjects[index]=completedProject 

            this.setState(()=>{
                return{
                    projects_CP:completedProjects,
                    currentlyEditing_CP:false
                }
            })

            document.getElementById(comp_prj).disabled = true
        }
    }


    render(){
        return(
            <div className="container mt-5 p-5 border">
            <p className="display-2 text-center">Completed Projects</p>

                <div className="row float-end mb-5 p-2 border">
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateRemoveButtons1" onChange={this.enableRemoveButtons_CP}/>
                            <label className="form-check-label" htmlFor="activateRemoveButtons1">Enable Removing Completed Projects</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateEditButtons1" onChange={this.enableEditingButtons_CP} disabled={this.state.currentlyEditing_CP}/>
                            <label className="form-check-label" htmlFor="activateEditButtons1">Enable Editing Completed Projects</label>
                        </div>
                    
                    </div>
                    
                </div>
      

                <div className="row">
                     <h2>Number Of Completed Projects: -<strong>{this.state.projects_CP.length}-</strong></h2>

                </div>

                <br></br>
                {this.state.enableRemoveProjects_CP === false && <div className="alert alert-danger my-5">
                                                <p>Be Carefull, <strong>Remove Buttons For Completed Projects</strong> Are Activated!!!</p>
                                            </div>}
                {this.state.enableEditingProjects_CP === false && <div className="alert alert-danger my-5">
                                            <p>Be Carefull, <strong>Editing Buttons For Completed Projects</strong> Are Activated!!!</p>
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
                        this.state.projects_CP.map((completed_project)=>{
                        return(
                            <tr key={completed_project}>
                                <th scope="row" >{this.state.projects_CP.indexOf(completed_project) + 1}</th>
                                <td ><div><input className="from-control border-0 col-12" 
                                style={this.state.trInputStyle_CP === true ? {background:"transparent"}:{color:"red"}} 

                                defaultValue={completed_project} id={completed_project} disabled /></div></td>

                                <td ><button 
                                className="btn btn-danger btn-lg"
                                value={completed_project}
                                id="removeProject"
                                onClick={(event)=>{
                                    this.removeCompletedProject(event,completed_project)
                                }}
                                disabled={this.state.enableRemoveProjects_CP}

                                >
                                <i className="fas fa-trash-alt" ></i></button></td>

                                <td ><button 
                                    type="submit" 
                                    className="btn btn-secondary btn-lg" 
                                    id="editProject"
                                    onClick={(event)=>{
                                        this.editCompletedProject(event,completed_project)
                                    }}
                                    disabled={this.state.enableEditingProjects_CP}
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
                        <input className="form-control" type="text" id="completedproject" onChange={this.checkTheDublicates_CompletedProjects} placeholder="Case Sensitive"/>
                    </div>
                    <div className="col-sm-3">
                        <button type="submit"  className="btn btn-primary btn-lg col-12" id="addcompletedproject" onClick={this.AddCompletedProject} >Add A Completed Project</button>
                    </div>
                </div>
                
                    {this.state.dublicateError_CP && <div className="alert alert-danger my-4 py-4" role="alert">{this.state.dublicateError_CP}</div>}
                    {this.state.dublicateWarning_CP && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.dublicateWarning_CP}</div>}
                    {this.state.addProjectMessage_CP && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.addProjectMessage_CP}</div>}
                    
                    
            </div>
        )
    }
}


export default CompletedPrjectsTable


