import React from 'react'

class SectorsTable extends React.Component{

    constructor(props){
        super(props)
        this.state={
            sectors:["Kar HES","Muş Karasu Regülatörü","Bingöl Merkez Sulaması"],
            dublicateMsg_S:'',
            dublicateError_S:'',
            dublicateWarning_S:'',
            addSectorMessage:'',
            removeSector:'',
            enableRemoveSector:true, 
            enableEditingSector:true,
            trInputStyle_S:true,
            currentlyEditing_S:false 
        }
    }

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
                    addSectorMessage:'Project Must be At Least 4 Characters Long'
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


    render(){
        return(
            <div className="container mt-5 p-5 border" >
            <p className="display-2 text-center">Sectors</p>

                <div className="row float-end mb-5 p-2 border">
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateRemoveButtons1" onChange={this.enableRemoveButtons_Sector}/>
                            <label className="form-check-label" htmlFor="activateRemoveButtons1">Enable Removing Sectors</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="activateEditButtons1" onChange={this.enableEditingButtons_Sector} disabled={this.state.currentlyEditing_S}/>
                            <label className="form-check-label" htmlFor="activateEditButtons1">Enable Editing Sectors</label>
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
        )
    }
}


export default SectorsTable


