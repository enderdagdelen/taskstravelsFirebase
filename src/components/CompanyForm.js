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
                            <input type="text" className="form-control" id="companyName_input" required/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="generalDirector">General Director</label>
                            <input type="text" className="form-control" id="generalDirector_input"/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy1">Deputy GM 1</label>
                            <input type="text" className="form-control" id="deputy1_input"/>
                        </div>                       
                    
                    </div>



                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="deputy2">Deputy GM 2</label>
                            <input type="text" className="form-control" id="deputy2_input"/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="deputy3">Deputy GM 3</label>
                            <input type="text" className="form-control" id="deputy3_input"/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy4">Deputy GM 4</label>
                            <input type="text" className="form-control" id="deputy4_input"/>
                        </div>       

                    </div>
                    <br></br>


                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="foundedOn">Founded On</label>
                            <input type="text" className="form-control" id="foundedOn_input"/>
                        </div>              
                        <div className="col-sm-4">
                            <label htmlFor="numberOfEmployees">Number Of Employees</label>
                            <input type="text" className="form-control" id="numberOfEmployees_input"/>
                        </div>    
                        <div className="col-sm-4">
                            <label htmlFor="deputy3">Language</label>
                            <input type="text" className="form-control" id="language_input"/>
                        </div>            
                    </div>

                    <hr></hr>
                    <div className="row p-4 bg-secondary mx-2">
                        <div className="col-sm-6 form-check">  
                            <input className="form-check-input" type="checkbox" value="" id="passiveWork"/>
                            <label className="form-check-label text-info" htmlFor="passiveWork">Passive Work On Weekend</label>
                        </div>
                        <div className="col-sm-6 form-check">  
                            <input className="form-check-input" type="checkbox" value="" id="activeWork"/>
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
                                    <select className="form-select">
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
                                <select className="form-select">
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
                                    <select className="form-select" aria-label="Default select example">
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
                                    <select className="form-select" aria-label="Default select example">
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
                                    <select className="form-select">
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
                                <select className="form-select">
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
                                    <select className="form-select" aria-label="Default select example">
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
                                    <select className="form-select" aria-label="Default select example">
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

                    

                
                </form>

                        
                    
            </div>        
            
        )
    }
}

export default CompanyForm