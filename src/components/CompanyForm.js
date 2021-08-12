import React from 'react'

class CompanyForm extends React.Component{

    render(){
        return(
            <div className="container bg-light mt-5 pb-5 border">
            
            <div id="h2Frame">
                <h2 className="text-center p-4 "><i className="fas fa-pen-square fa-2x px-5" ></i><span id="taskformHeader">Company Registiration Form</span></h2>
            </div>

                <form>
                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" className="form-control" required/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="generalDirector">General Director</label>
                            <input type="text" className="form-control"/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy1">Deputy GM 1</label>
                            <input type="text" className="form-control"/>
                        </div>                       
                    
                    </div>



                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="deputy2">Deputy GM 2</label>
                            <input type="text" className="form-control"/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="deputy3">Deputy GM 3</label>
                            <input type="text" className="form-control"/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy4">Deputy GM 4</label>
                            <input type="text" className="form-control"/>
                        </div>       

                    </div>



                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="deputy4">Deputy GM 4</label>
                            <input type="text" className="form-control"/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="deputy2">Deputy GM</label>
                            <input type="text" className="form-control"/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy3">Deputy GM</label>
                            <input type="text" className="form-control"/>
                        </div>            
                    </div>



                
                </form>

                        
                    
            </div>        
            
        )
    }
}

export default CompanyForm
/*
    <div className="user-details">
    <div className="input-box">
        <span className="details">Company Name</span>
        <input type="text" placeholder="Enter Company Name" required/>
    </div>
    <div className="input-box">
        <span className="details">Board Members</span>
        <input type="text" placeholder="Enter Board Members Name" />
    </div>
    <div className="input-box">
        <span className="details">General Director</span>
        <input type="text" placeholder="Enter General Director Name" />
    </div>
    <div className="input-box">
        <span className="details">Deputy Director General 1</span>
        <input type="text" placeholder="Enter Deputy Director General 1 Name" />
    </div>
    <div className="input-box">
        <span className="details">Deputy Director General 2</span>
        <input type="text" placeholder="Enter Deputy Director General 2 Name" />
    </div>
    <div className="input-box">
        <span className="details">Deputy Director General 3</span>
        <input type="text" placeholder="Enter Deputy Director General 3 Name" />
    </div>
    <div className="input-box">
        <span className="details">Deputy Director General 4</span>
        <input type="text" placeholder="Enter Deputy Director General 4 Name" />
    </div>
    <div className="input-box">
        <span className="details">Sectors</span>
        <input type="text" placeholder="Enter Sectors Which Company Operates" />
    </div>
    <div className="input-box">
        <span className="details">Completed Projects</span>
        <input type="text" placeholder="Enter Completed Projects" />
    </div>
    <div className="input-box">
        <span className="details">On-Going Projects</span>
        <input type="text" placeholder="Enter On-Going Projects" />
    </div>
    <div className="input-box">
        <span className="details">Number Of Employees</span>
        <input type="text" placeholder="Number Of Employees" required/>
    </div>
    <div className="input-box">
        <span className="details">Language</span>
        <input type="text" placeholder="Enter Prefered Language" required/>
    </div>
    <div className="input-box">
        <span className="details">Active Work On Weekends</span>
        <input type="text" placeholder="Active Work On Weekend" required/>
    </div>
    <div className="input-box">
        <span className="details">Passive Work On Weekend</span>
        <input type="text" placeholder="Passive Work On Weekend" required/>
    </div>
    <div className="input-box">
        <span className="details">Shift Starts At(Hour)</span>
        <input type="text" placeholder="Hour" required/>
    </div>
    <div className="input-box">
        <span className="details">Shift Starts At(Minute)</span>
        <input type="text" placeholder="Minute" required/>
    </div>
    <div className="input-box">
        <span className="details">Shift Ends At</span>
        <input type="text" placeholder="Hour" required/>
    </div>
    <div className="input-box">
        <span className="details">Name</span>
        <input type="text" placeholder="Enter Your Name" required/>
    </div>
    <div className="input-box">
        <span className="details">Name</span>
        <input type="text" placeholder="Enter Your Name" required/>
    </div>
    <div className="input-box">
        <span className="details">Name</span>
        <input type="text" placeholder="Enter Your Name" required/>
    </div>
    <div className="input-box">
        <span className="details">Name</span>
        <input type="text" placeholder="Enter Your Name" required/>
    </div>
    <div className="input-box">
        <span className="details">Name</span>
        <input type="text" placeholder="Enter Your Name" required/>
    </div>
</div>

                        */