import React from 'react'
import moment from 'moment'
import  {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize'// this prevents withStyles error but throws some warnings
import validator from 'validator';

class CompanyForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            companyName:'',
            generalDirector:'',
            deputyDirectorGeneral_1:'',
            deputyDirectorGeneral_2:'',
            deputyDirectorGeneral_3:'',
            deputyDirectorGeneral_4:'',
            foundedOn:moment(),
            numberOfEmployees:1,
            language:"English",
            workOnWeekEnd_Passive:false,
            workOnWeekEnd_Active:false,
            workShiftStartsAt_Hour_Weekdays:9,
            workShiftStartsAt_Min_Weekdays:0,
            workShiftEndsAt_Hour_Weekdays:18,
            workShiftEndsAt_Min_Weekdays:0,
            workShiftStartsAt_Hour_Weekdends:9,
            workShiftStartsAt_Min_Weekdends:0,
            workShiftEndsAt_Hour_Weekdends:14,
            workShiftEndsAt_Min_Weekdends:0,
            //singleDatepicker 
            calenderFocused_date:false,
            //Tables Display Status
            hide_onGoingProjects:true,
            hide_completedProjects:true,
            hide_boardMembers:true,
            hide_sectors:true,
            //OnGoing Projects Table States
            projects:[],
            dublicateMsg:'',
            dublicateError:'',
            dublicateWarning:'',
            addProjectMessage:'',
            removeProjectCheck:'',
            enableRemoveProjects:true, 
            enableEditingProjects:true,
            trInputStyle:true,
            currentlyEditing:false,
            //Completed Projects Table States
            projects_CP:[],
            dublicateMsg_CP:'',
            dublicateError_CP:'',
            dublicateWarning_CP:'',
            addProjectMessage_CP:'',
            removeProjectCheck_CP:'',
            enableRemoveProjects_CP:true, 
            enableEditingProjects_CP:true,
            trInputStyle_CP:true,
            currentlyEditing_CP:false, 
            //BoardMemebers Projects Table States
            boardMembers:[],
            dublicateMsg_BM:'',
            dublicateError_BM:'',
            dublicateWarning_BM:'',
            addMemberMessage:'',
            removeMemberCheck:'',
            enableRemoveMember:true, 
            enableEditingMember:true,
            trInputStyle_BM:true,
            currentlyEditing_BM:false,  
            //Sectors Projects Table States
            sectors:[],
            dublicateMsg_S:'',
            dublicateError_S:'',
            dublicateWarning_S:'',
            addSectorMessage:'',
            removeSector:'',
            enableRemoveSector:true, 
            enableEditingSector:true,
            trInputStyle_S:true,
            currentlyEditing_S:false, 
            // Submit Error Messages
            submitErrMsg:''
        }
    }

    //_______________________________________________Company Name On Change
    companyNameOnChange = (e) => {
        const val = e.target.value
        const regex = /^[a-zA-Z0-9_ .,:;-_!/"'@$£$#%ıİşŞçÇöÖüÜğĞ]*$/

 
        if(val.match(regex)){
            document.getElementById('companyName_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    companyName:val
                }
            })
            
        }else{
            document.getElementById('companyName_input').style.backgroundColor="red"
 
        }

    }

    //_______________________________________________General Director Name On Change

    generalDirectorOnChange = (e) => {
        const val = e.target.value
        const regex = /^[a-zA-Z_ ıİşŞçÇöÖüÜğĞ]*$/

        
        if(val.match(regex)){

            document.getElementById('generalDirector_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    generalDirector:val
                }
            })

        }else{

            document.getElementById('generalDirector_input').style.backgroundColor="red"

        }

    }

    //_______________________________________________Deputy Directors

    deputy1_onChange = (e) => {
        const val = e.target.value
        const regex = /^[a-zA-Z_ ıİşŞçÇöÖüÜğĞ]*$/

        
        if(val.match(regex)){

            document.getElementById('deputy1_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    deputyDirectorGeneral_1:val
                }
            })

        }else{

            document.getElementById('deputy1_input').style.backgroundColor="red"

        }
    }

    deputy2_onChange = (e) => {
        const val = e.target.value
        const regex = /^[a-zA-Z_ ıİşŞçÇöÖüÜğĞ]*$/

        
        if(val.match(regex)){

            document.getElementById('deputy2_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    deputyDirectorGeneral_2:val
                }
            })

        }else{

            document.getElementById('deputy2_input').style.backgroundColor="red"

        }
    }

    deputy3_onChange = (e) => {
        const val = e.target.value
        const regex = /^[a-zA-Z_ ıİşŞçÇöÖüÜğĞ]*$/

        
        if(val.match(regex)){

            document.getElementById('deputy3_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    deputyDirectorGeneral_3:val
                }
            })

        }else{

            document.getElementById('deputy3_input').style.backgroundColor="red"

        }
    }

    deputy4_onChange = (e) => {
        const val = e.target.value
        const regex = /^[a-zA-Z_ ıİşŞçÇöÖüÜğĞ]*$/

        
        if(val.match(regex)){

            document.getElementById('deputy4_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    deputyDirectorGeneral_4:val
                }
            })

        }else{

            document.getElementById('deputy4_input').style.backgroundColor="red"

        }
    }

    //_______________________________________________Number Of Employees
    numberOfEmployees_onChange = (e) => {
        const val = e.target.value
        const regex = /^[0-9]*$/
        if(val.match(regex)){

            document.getElementById('numberOfEmployees_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    numberOfEmployees:val
                }
            })

        }else{

            document.getElementById('numberOfEmployees_input').style.backgroundColor="red"

        }
    }

    //_____________________________________________WorkOnWeekEnd Passive
    workOnWeekEnd_Passive = () => {
        this.setState((prevState)=>{
            return{
                workOnWeekEnd_Passive:!prevState.workOnWeekEnd_Passive
            }
        })
    }
    //_____________________________________________WorkOnWeekEnd Active

    workOnWeekEnd_Active = () => {
        this.setState((prevState)=>{
            return{
                workOnWeekEnd_Active:!prevState.workOnWeekEnd_Active
            }
        })
    }



    workShiftStartsAt_Hour_Weekdays_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftStartsAt_Hour_Weekdays:val
            }
        })
    }
    workShiftStartsAt_Min_Weekdays_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftStartsAt_Min_Weekdays:val
            }
        })
    }
    workShiftEndsAt_Hour_Weekdays_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftEndsAt_Hour_Weekdays:val
            }
        })
    }
    workShiftEndsAt_Min_Weekdays_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftEndsAt_Min_Weekdays:val
            }
        })
    }
    workShiftStartsAt_Hour_Weekdends_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftStartsAt_Hour_Weekdends:val
            }
        })
    }
    workShiftStartsAt_Min_Weekdends_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftStartsAt_Min_Weekdends:val
            }
        })
    }
    workShiftEndsAt_Hour_Weekdends_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftEndsAt_Hour_Weekdends:val
            }
        })
    }
    workShiftEndsAt_Min_Weekdends_onChange = (e) => {
        const val = e.target.value
        this.setState(()=>{
            return{
                workShiftEndsAt_Min_Weekdends:val
            }
        })
    }
    




    //_______________________________________________Show Tables Radio Buttons
    showOnGoingProjectsTable = () => {
        this.setState((prevState)=>{
            return{
                hide_onGoingProjects:!prevState.hide_onGoingProjects
            }
        })
    }

    showCompletedProjects = () => {
        this.setState((prevState)=>{
            return{
                hide_completedProjects:!prevState.hide_completedProjects
            }
        })
    }

    showBoardMembers = () => {
        this.setState((prevState)=>{
            return{
                hide_boardMembers:!prevState.hide_boardMembers
            }
        })
    }

    showSectors = () => {
        this.setState((prevState)=>{
            return{
                hide_sectors:!prevState.hide_sectors
            }
        })
    }


    //__________________________________________________________________Single Date Picker
    date_onChange = (dateInput) => {
        if(dateInput){
            this.setState(()=>{
                return{
                    foundedOn:dateInput
                }
            })
        }
        
    }

    focus_onChange = ({focused}) => {
        this.setState(()=>{
            return{
                calenderFocused_date:focused
            }
        })
    }

    //__________________________________________________________________Language
    languageOnChange = (e) => {
        const preferedLAnguage = e.target.value
        this.setState(()=>{
            return{
                language:preferedLAnguage
            }
        })
    }

    // ____________________________________________________________________________________________________________________TABLE METHODS
    //___________________________________________________________________On Going Projects
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
    //___________________________________________________________________Completed Projects
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
    //___________________________________________________________________Board Members
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
    //___________________________________________________________________Sectors
    AddSector = (e) => {
        e.preventDefault()
        let value = document.getElementById('newsector').value
        if(value.length > 3){
            this.setState(()=>{
                return{
                    sectors:[
                        ...this.state.sectors,
                        value
                    ],
                    addSectorMessage:''
                }
            })
        }else{
            this.setState(()=>{
                return{
                    addSectorMessage:'Sector Name or Description Must be At Least 4 Characters Long'
                }
            })
        }
        document.getElementById('newsector').value=""
    }


    checkTheDublicates_Sector = (e) => {
        const value = document.getElementById('newsector').value
        //console.log("value1:"+value);        
        

        if(this.state.sectors.includes(value)){
            //console.log("dublicate");
            document.getElementById('addsector').disabled = true
            this.setState(()=>{
                return{
                    dublicateError_S:`${value} Sector Already Exists In The Sectors Folder.`
                }
            })
            

           

        }else{
            document.getElementById('addsector').disabled = false
            this.setState(()=>{
                return{
                    dublicateError_S:""
                }
            })
        }


        let dublicates = []
        let dublicatesString = ""
        this.state.sectors.map((sector)=>{

            if(sector.includes(value) || value.includes(sector)){
               //console.log("value2:"+value);
               dublicates.push(sector)
               
               dublicatesString = dublicates.toString()
               //console.log("dublicatesString"+dublicatesString);
            }
   
       })

       if(dublicates.length > 0){
        this.setState(()=>{
            return{
                dublicateWarning_S: value !== " " && value !== ""  && `The Phrase ${value} is similar to An Existing Sector: ${dublicatesString}`
            }
            })
       }else{
        this.setState(()=>{
            return{
                dublicateWarning_S:""
            }
            })
       }
      
    }


    

    enableRemoveButtons_Sector = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableRemoveSector:!prevState.enableRemoveSector
            }
        })
    }

    enableEditingButtons_Sector = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                enableEditingSector:!prevState.enableEditingSector,
                
            }
        })
    }


    removeSector = (event,sec) => {
        event.preventDefault()
        
        this.setState(()=>{
            return{
                sectors:this.state.sectors.filter((sector)=>{
                    return sector !== sec
                })
            }
        }) 
        
    }
    //--------------------------------------------------------------------------------------------------------Working On

    editSector = (event, sec)=>{
        event.preventDefault()

        this.setState(()=>{
            return{
                currentlyEditing_S:true
            }
        })

        document.getElementById(sec).disabled = false
        document.getElementById(sec).style.background = "yellow"

        const newSector = document.getElementById(sec).value

        if(sec !== "" && sec !== " " && sec !== newSector){

            let index = this.state.sectors.indexOf(sec)

            let currentSectors = this.state.sectors
            currentSectors[index]=newSector 

            this.setState(()=>{
                return{
                    sectors:currentSectors,
                    currentlyEditing_S:false
                }
            })

            document.getElementById(sec).disabled = true
        }
    }
    //--------------------------------------------------------------------FORM SUBMIT

    formOnSubmit = (e) => {
        e.preventDefault()

        if(this.state.companyName.length < 3){
            this.setState(()=>{
                return{
                    submitErrMsg:"Please Fill In Company Name"
                }
            })
            document.getElementById('companyName_input').style.backgroundColor="red"
        }else{
            document.getElementById('companyName_input').style.backgroundColor="white"
            this.setState(()=>{
                return{
                    submitErrMsg:""
                }
            })

            this.props.onSubmit({
                companyName:this.state.companyName,
                boardMembers:this.state.boardMembers,
                generalDirector:this.state.generalDirector,
                deputyDirectorGeneral_1:this.state.deputyDirectorGeneral_1,
                deputyDirectorGeneral_2:this.state.deputyDirectorGeneral_2,
                deputyDirectorGeneral_3:this.state.deputyDirectorGeneral_3,
                deputyDirectorGeneral_4:this.state.deputyDirectorGeneral_4,
                foundedOn:this.state.foundedOn.valueOf(), // 01 01 2000 12=00=00=00 local time tr - 946720800000
                sectors:this.state.sectors,
                completedProjects:this.state.projects_CP,
                onGoingProjects:this.state.projects,
                numberOfEmployees:this.state.numberOfEmployees,
                language:this.state.language,
                workOnWeekEnd_Active:this.state.workOnWeekEnd_Active,
                workOnWeekEnd_Passive:this.state.workOnWeekEnd_Passive,
                workShiftStartsAt_Hour_Weekdays:this.state.workShiftStartsAt_Hour_Weekdays,
                workShiftStartsAt_Min_Weekdays:this.state.workShiftStartsAt_Min_Weekdays,
                workShiftEndsAt_Hour_Weekdays:this.state.workShiftEndsAt_Hour_Weekdays,
                workShiftEndsAt_Min_Weekdays:this.state.workShiftEndsAt_Min_Weekdays,
                workShiftStartsAt_Hour_Weekdends:this.state.workShiftStartsAt_Hour_Weekdends,
                workShiftStartsAt_Min_Weekdends:this.state.workShiftStartsAt_Min_Weekdends,
                workShiftEndsAt_Hour_Weekdends:this.state.workShiftEndsAt_Hour_Weekdends,
                workShiftEndsAt_Min_Weekdends:this.state.workShiftEndsAt_Min_Weekdends
            })
        }

        
    }

    render(){
        return(
            <div className="container bg-light mt-5 pb-5 border">
            
            <div id="h2Frame">
                <h2 className="text-center p-4 "><i className="fas fa-pen-square fa-2x px-5" ></i><span id="taskformHeader">Company Registiration Form</span></h2>
            </div>

                <form onSubmit={this.formOnSubmit}>
                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" className="form-control" id="companyName_input" onChange={this.companyNameOnChange} required/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="generalDirector">General Director</label>
                            <input type="text" required className="form-control" id="generalDirector_input" onChange={this.generalDirectorOnChange} value={this.state.generalDirector}/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy1">Deputy GM 1</label>
                            <input type="text" className="form-control" id="deputy1_input" value={this.state.deputyDirectorGeneral_1} onChange={this.deputy1_onChange}/>
                        </div>                       
                    
                    </div>



                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="deputy2">Deputy GM 2</label>
                            <input type="text" className="form-control" id="deputy2_input"  value={this.state.deputyDirectorGeneral_2} onChange={this.deputy2_onChange}/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="deputy3">Deputy GM 3</label>
                            <input type="text" className="form-control" id="deputy3_input" value={this.state.deputyDirectorGeneral_3} onChange={this.deputy3_onChange}/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy4">Deputy GM 4</label>
                            <input type="text" className="form-control" id="deputy4_input" value={this.state.deputyDirectorGeneral_4} onChange={this.deputy4_onChange}/>
                        </div>       

                    </div>
                    <br></br>


                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="foundedOn">Founded On</label><br></br>
                            <SingleDatePicker
                                date={this.state.foundedOn} // momentPropTypes.momentObj or null
                                onDateChange={this.date_onChange} // PropTypes.func.isRequired
                                focused={this.state.calenderFocused_date} // PropTypes.bool
                                onFocusChange={this.focus_onChange} // PropTypes.func.isRequired
                                id="your_unique_id" // PropTypes.string.isRequired,
                                numberOfMonths={1}
                                isOutsideRange={()=>false}
                                />
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="numberOfEmployees">Number Of Employees</label>
                            <input type="text" className="form-control" id="numberOfEmployees_input" value={this.state.numberOfEmployees} onChange={this.numberOfEmployees_onChange} required/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy3">Language</label>
                            <select className="form-select" value={this.state.language} onChange={this.languageOnChange}>
                                <optgroup>
                                    <option>English</option>
                                    <option>Turkish</option>
                                </optgroup>
                            </select>
                        </div>            
                    </div>

                    <hr></hr>
                    <div className="row p-4 bg-secondary mx-2">
                        <div className="col-sm-6 form-check">  
                            <input className="form-check-input" type="checkbox" value="" id="passiveWork" onChange={this.workOnWeekEnd_Passive}/>
                            <label className="form-check-label text-info" htmlFor="passiveWork">Passive Work On Weekend</label>
                        </div>
                        <div className="col-sm-6 form-check">  
                            <input className="form-check-input" type="checkbox" value="" id="activeWork" onChange={this.workOnWeekEnd_Active}/>
                            <label className="form-check-label text-info" htmlFor="activeWork">Active Work On Weekend</label>
                        </div>
                        <small className="text-light"><i>-"These Information Helps Overtime To Be Calculated Correctly"-</i></small>
                    </div>
                    <hr></hr>

                    {/* Workday Shift Hours */}

                    <div className="row p-4">
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="col-6 pt-2">Shifts Start On Weekday At:</div>
                                <div className="col-3">
                                    <select className="form-select" 
                                    value={this.state.workShiftStartsAt_Hour_Weekdays} 
                                    id="shiftStarts_Hour_Weekday"
                                    onChange={this.workShiftStartsAt_Hour_Weekdays_onChange}>
                                        <optgroup>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>

                                        </optgroup>
                                    </select>
                                </div>
                                <div className="col-3">
                                <select className="form-select" 
                                value={this.state.workShiftStartsAt_Min_Weekdays} 
                                id="shiftStarts_Min_Weekday"
                                onChange={this.workShiftStartsAt_Min_Weekdays_onChange}>
                                    <optgroup>
                                        <option>0</option>
                                        <option>15</option>
                                        <option>30</option>
                                        <option>45</option>
                                    </optgroup>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-2 d-none d-lg-block"></div>
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="col-6 p-2">Shifts Ends On Weekday At:</div>
                                <div className="col-3">
                                    <select className="form-select" 
                                    value={this.state.workShiftEndsAt_Hour_Weekdays} 
                                    id="shiftEns_Hour_Weekday"
                                    onChange={this.workShiftEndsAt_Hour_Weekdays_onChange}>
                                        <optgroup>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>

                                        </optgroup>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select className="form-select" 
                                    value={this.state.workShiftEndsAt_Min_Weekdays} 
                                    id="shiftEnds_Min_Weekday"
                                    onChange={this.workShiftEndsAt_Min_Weekdays_onChange}>
                                        <optgroup>
                                            <option>0</option>
                                            <option>15</option>
                                            <option>30</option>
                                            <option>45</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* Weekend Shift Hours*/}
            

                    <div className="row py-4 px-2">
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="col-6 pt-2">Shifts Start On Weekend At:</div>
                                <div className="col-3">
                                    <select className="form-select" 
                                    value={this.state.workShiftStartsAt_Hour_Weekdends} 
                                    id="shiftStarts_Hour_Weekend"
                                    onChange={this.workShiftStartsAt_Hour_Weekdends_onChange}>
                                        <optgroup>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>

                                        </optgroup>
                                    </select>
                                </div>
                                <div className="col-3">
                                <select className="form-select" 
                                value={this.state.workShiftStartsAt_Min_Weekdends} 
                                id="shiftStarts_Min_Weekend"
                                onChange={this.workShiftStartsAt_Min_Weekdends_onChange}>
                                    <optgroup>
                                        <option>0</option>
                                        <option>15</option>
                                        <option>30</option>
                                        <option>45</option>
                                    </optgroup>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-2 d-none d-lg-block"></div>{/* just to sparate other divs */}
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="col-6 pt-2">Shifts Ends On Weekend At:</div>
                                <div className="col-3">
                                    <select className="form-select" 
                                    value={this.state.workShiftEndsAt_Hour_Weekdends} 
                                    id="shiftEnds_Hour_Weekend"
                                    onChange={this.workShiftEndsAt_Hour_Weekdends_onChange}>
                                        <optgroup>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>

                                        </optgroup>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select className="form-select" 
                                    value={this.state.workShiftEndsAt_Min_Weekdends} 
                                    id="shiftEnds_Min_Weekend"
                                    onChange={this.workShiftEndsAt_Min_Weekdends_onChange}>
                                        <optgroup>
                                            <option>0</option>
                                            <option>15</option>
                                            <option>30</option>
                                            <option>45</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <br></br>
                    <div className="row p-4 bg-secondary mx-2">
                        <div className="col-sm-3 form-check">  
                            <input className="form-check-input" type="checkbox" id="onGoingProjects" onChange={this.showOnGoingProjectsTable}/>
                            <label className="form-check-label text-info" htmlFor="onGoingProjects">On-Going Projects</label>
                        </div>
                        <div className="col-sm-3 form-check">  
                            <input className="form-check-input" type="checkbox" id="completedProjects" onChange={this.showCompletedProjects}/>
                            <label className="form-check-label text-info" htmlFor="completedProjects">Completed Projects</label>
                        </div>
                        <div className="col-sm-3 form-check">  
                            <input className="form-check-input" type="checkbox" id="boardMembers" onChange={this.showBoardMembers}/>
                            <label className="form-check-label text-info" htmlFor="boardMembers">Board Members</label>
                        </div>
                        <div className="col-sm-3 form-check">  
                            <input className="form-check-input" type="checkbox" id="sectors" onChange={this.showSectors}/>
                            <label className="form-check-label text-info" htmlFor="sectors">Sectors</label>
                        </div>
                        <small className="text-light"><i>-"Click And Display Detailed Tables"-</i></small>
                    </div>





{/*___________________________________________________________________________________________________________________________________________________ */}                    

                    {/* OnGoing Projects Table */}
                    <div className="container mt-5 p-5 border" hidden={this.state.hide_onGoingProjects}>
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

                    {/* Completed Projects Table */}
                    <div className="container mt-5 p-5 border" hidden={this.state.hide_completedProjects}>
                    <p className="display-2 text-center">Completed Projects</p>
        
                        <div className="row float-end mb-5 p-2 border">
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="activateRemoveButtons2" onChange={this.enableRemoveButtons_CP}/>
                                    <label className="form-check-label" htmlFor="activateRemoveButtons2">Enable Removing Completed Projects</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="activateEditButtons2" onChange={this.enableEditingButtons_CP} disabled={this.state.currentlyEditing_CP}/>
                                    <label className="form-check-label" htmlFor="activateEditButtons2">Enable Editing Completed Projects</label>
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

                    {/* Board Members Table */}

                    <div className="container mt-5 p-5 border" hidden={this.state.hide_boardMembers}>
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
                                                        <p>Be Carefull, <strong>Remove Buttons For Board Members</strong> Are Activated!!!</p>
                                                    </div>}
                        {this.state.enableEditingMember === false && <div className="alert alert-danger my-5">
                                                    <p>Be Carefull, <strong>Editing Buttons For Board Members</strong> Are Activated!!!</p>
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
                    
                    {/* SECTORS TABLE */}
                    <div className="container mt-5 p-5 border" hidden={this.state.hide_sectors}>
                    <p className="display-2 text-center">Sectors</p>
        
                        <div className="row float-end mb-5 p-2 border">
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="activateRemoveButtons4" onChange={this.enableRemoveButtons_Sector}/>
                                    <label className="form-check-label" htmlFor="activateRemoveButtons4">Enable Removing Sectors</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="activateEditButtons4" onChange={this.enableEditingButtons_Sector} disabled={this.state.currentlyEditing_S}/>
                                    <label className="form-check-label" htmlFor="activateEditButtons4">Enable Editing Sectors</label>
                                </div>
                            
                            </div>
                            
                        </div>
              
        
                        <div className="row">
                             <h2>Number Of Sectors: -<strong>{this.state.sectors.length}-</strong></h2>
        
                        </div>
        
                        <br></br>
                        {this.state.enableRemoveSector === false && <div className="alert alert-danger my-5">
                                                        <p>Be Carefull, <strong>Remove Buttons</strong> Are Activated!!!</p>
                                                    </div>}
                        {this.state.enableEditingSector === false && <div className="alert alert-danger my-5">
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
                                this.state.sectors.map((sector)=>{
                                return(
                                    <tr key={sector}>
                                        <th scope="row" >{this.state.sectors.indexOf(sector) + 1}</th>
                                        <td ><div><input className="from-control border-0 col-12" 
                                        style={this.state.trInputStyle_S === true ? {background:"transparent"}:{color:"red"}} 
        
                                        defaultValue={sector} id={sector} disabled /></div></td>
        
                                        <td ><button 
                                        className="btn btn-danger btn-lg"
                                        value={sector}
                                        id="removeProject"
                                        onClick={(event)=>{
                                            this.removeSector(event,sector)
                                        }}
                                        disabled={this.state.enableRemoveSector}
        
                                        >
                                        <i className="fas fa-trash-alt" ></i></button></td>
        
                                        <td ><button 
                                            type="submit" 
                                            className="btn btn-secondary btn-lg" 
                                            id="editProject"
                                            onClick={(event)=>{
                                                this.editSector(event,sector)
                                            }}
                                            disabled={this.state.enableEditingSector}
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
                                <input className="form-control" type="text" id="newsector" onChange={this.checkTheDublicates_Sector} placeholder="Case Sensitive"/>
                            </div>
                            <div className="col-sm-3">
                                <button type="submit"  className="btn btn-primary btn-lg col-12" id="addsector" onClick={this.AddSector} >Add A Sector</button>
                            </div>
                        </div>
                        
                            {this.state.dublicateError_S && <div className="alert alert-danger my-4 py-4" role="alert">{this.state.dublicateError_S}</div>}
                            {this.state.dublicateWarning_S && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.dublicateWarning_S}</div>}
                            {this.state.addSectorMessage && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.addSectorMessage}</div>}

                            
                    </div>

                    {/* END OF TABLES */}
                    <div className="container row my-4">
                        <div className="alert alert-danger"><strong><u>!!! WARNING:</u><br></br>  "If Specific Informations Are Not Provided, The Default Values Will Be Used In Calculations"</strong></div>
                    </div>
                    <div className="container my-5" >
                        <button className="btn btn-primary btn-lg col-12 p-4 " type="submit"><p className="h1"><strong>REGISTER</strong></p></button>
                    </div>
                    {this.state.submitErrMsg && <div className="alert alert-warning my-4 py-4" role="alert">{this.state.submitErrMsg}</div>}

                    

                </form>


            </div>        
            
        )
    }
}

export default CompanyForm