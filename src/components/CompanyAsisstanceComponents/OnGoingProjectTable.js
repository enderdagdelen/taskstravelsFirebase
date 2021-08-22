import React from 'react'

class OnGoingPrjectsTable extends React.Component{

    constructor(props){
        super(props)
        this.state={
            projects:["Ankara Göletleri","Van Göletleri","Erzincan Sulaması"],
            dublicateMsg:'',
            dublicateError:'',
            dublicateWarning:'',
            addProjectMessage:'',
            removeProjectCheck:'',
            enableRemoveProjects:true, 
            enableEditingProjects:true,
            trInputStyle:true,
            currentlyEditing:false
        }
    }

    AddProject = (e) => {
        e.preventDefault()
        let value = document.getElementById('newproject').value
        if(value.length > 3){
            this.setState(()=>{
                return{
                    projects:[
                        ...this.state.projects,
                        value
                    ],
                    addProjectMessage:''
                }
            })
        }else{
            this.setState(()=>{
                return{
                    addProjectMessage:'Project Must be At Least 4 Characters Long'
                }
            })
        }
        document.getElementById('newproject').value=""
    }


    checkTheDublicates = (e) => {
        const value = document.getElementById('newproject').value
        //console.log("value1:"+value);        
        

        if(this.state.projects.includes(value)){
            //console.log("dublicate");
            document.getElementById('addproject').disabled = true
            this.setState(()=>{
                return{
                    dublicateError:`${value} Project Already Exists In The Projects Folder.`
                }
            })
            

           

        }else{
            document.getElementById('addproject').disabled = false
            this.setState(()=>{
                return{
                    dublicateError:""
                }
            })
        }


        let dublicates = []
        let dublicatesString = ""
        this.state.projects.map((project)=>{

            if(project.includes(value) || value.includes(project)){
               //console.log("value2:"+value);
               dublicates.push(project)
               
               dublicatesString = dublicates.toString()
               //console.log("dublicatesString"+dublicatesString);
            }
   
       })

       if(dublicates.length > 0){
        this.setState(()=>{
            return{
                dublicateWarning: value !== " " && value !== ""  && `The Phrase ${value} is similar to An Existing Project: ${dublicatesString}`
            }
            })
       }else{
        this.setState(()=>{
            return{
                dublicateWarning:""
            }
            })
       }
      
    }


    

    enableRemoveButtons = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableRemoveProjects:!prevState.enableRemoveProjects
            }
        })
    }

    enableEditingButtons = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableEditingProjects:!prevState.enableEditingProjects,
                
            }
        })
    }


    removeProject = (event,prj) => {
        event.preventDefault()
        
        this.setState(()=>{
            return{
                projects:this.state.projects.filter((project)=>{
                    return project !== prj
                })
            }
        }) 
        
    }
    //--------------------------------------------------------------------------------------------------------Working On

    editProject = (event, prj)=>{
        event.preventDefault()

        this.setState(()=>{
            return{
                currentlyEditing:true
            }
        })

        document.getElementById(prj).disabled = false
        document.getElementById(prj).style.background = "yellow"

        const newProject = document.getElementById(prj).value

        if(prj !== "" && prj !== " " && prj !== newProject){

            let index = this.state.projects.indexOf(prj)

            let currentProjects = this.state.projects
            currentProjects[index]=newProject 

            this.setState(()=>{
                return{
                    projects:currentProjects,
                    currentlyEditing:false
                }
            })

            document.getElementById(prj).disabled = true
        }
    }


    render(){
        return(
            <div className="container mt-5 p-5 border">
            <p className="display-2 text-center">On-Going Projects</p>
                <div className="row float-end mb-5 p-2 border">
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateRemoveButtons2" onChange={this.enableRemoveButtons}/>
                            <label className="form-check-label" htmlFor="activateRemoveButtons2">Enable Removing Projects</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateEditButtons2" onChange={this.enableEditingButtons} disabled={this.state.currentlyEditing}/>
                            <label className="form-check-label" htmlFor="activateEditButtons2">Enable Editing Projects</label>
                        </div>
                    
                    </div>
                    
                </div>
      

                <div className="row">
                     <h2>Number Of On-Going Projects: -<strong>{this.state.projects.length}-</strong></h2>

                </div>

                <br></br>
                {this.state.enableRemoveProjects === false && <div className="alert alert-danger my-5">
                                                <p>Be Carefull, <strong>Remove Buttons</strong> Are Activated!!!</p>
                                            </div>}
                {this.state.enableEditingProjects === false && <div className="alert alert-danger my-5">
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
                        this.state.projects.map((project)=>{
                        return(
                            <tr key={project}>
                                <th scope="row" >{this.state.projects.indexOf(project) + 1}</th>
                                <td ><div><input className="from-control border-0 col-12" 
                                style={this.state.trInputStyle === true ? {background:"transparent"}:{color:"red"}} 

                                defaultValue={project} id={project} disabled /></div></td>

                                <td ><button 
                                className="btn btn-danger btn-lg"
                                value={project}
                                id="removeProject"
                                onClick={(event)=>{
                                    this.removeProject(event,project)
                                }}
                                disabled={this.state.enableRemoveProjects}

                                >
                                <i className="fas fa-trash-alt" ></i></button></td>

                                <td ><button 
                                    type="submit" 
                                    className="btn btn-secondary btn-lg" 
                                    id="editProject"
                                    onClick={(event)=>{
                                        this.editProject(event,project)
                                    }}
                                    disabled={this.state.enableEditingProjects}
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
                        <input className="form-control" type="text" id="newproject" onChange={this.checkTheDublicates} placeholder="Case Sensitive"/>
                    </div>
                    <div className="col-sm-3">
                        <button type="submit"  className="btn btn-primary btn-lg col-12" id="addproject" onClick={this.AddProject} >Add New Project</button>
                    </div>
                </div>
                
                    {this.state.dublicateError && <div className="alert alert-danger my-4 py-4" role="alert">{this.state.dublicateError}</div>}
                    {this.state.dublicateWarning && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.dublicateWarning}</div>}
                    {this.state.addProjectMessage && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.addProjectMessage}</div>}
                    
                    
            </div>
        )
    }
}


export default OnGoingPrjectsTable


