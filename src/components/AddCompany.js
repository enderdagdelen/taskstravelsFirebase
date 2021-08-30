import React from 'react';
import CompanyForm from './CompanyForm';
import {connect} from 'react-redux'
import {addCompany, initiateAddCompany} from '../actions/companies';

import OngGoingProjects from '../components/CompanyAsisstanceComponents/OnGoingProjectTable';
import CompletedPrjectsTable from './CompanyAsisstanceComponents/CompletedProjects';
import BoardMembersTable from './CompanyAsisstanceComponents/BoardMembers';
import SectorsTable from './CompanyAsisstanceComponents/Sectors';

const AddCompany = (props) => (
    <div className="mb-5 pb-5">
        
        <CompanyForm 
            onSubmit={(companyInfo)=>{
                console.log(companyInfo);
                props.dispatch(initiateAddCompany(companyInfo))
                props.history.push('/')
            }}
        />

    </div>
)





export default connect()(AddCompany)






/*
<OngGoingProjects/>
        <CompletedPrjectsTable/>
        <BoardMembersTable/>
        <SectorsTable/>
        
        */