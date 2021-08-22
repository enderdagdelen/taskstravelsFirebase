import React from 'react';
import CompanyForm from './CompanyForm';

import OngGoingProjects from '../components/CompanyAsisstanceComponents/OnGoingProjectTable';
import CompletedPrjectsTable from './CompanyAsisstanceComponents/CompletedProjects';
import BoardMembersTable from './CompanyAsisstanceComponents/BoardMembers';
import SectorsTable from './CompanyAsisstanceComponents/Sectors';
const AddCompany = () => (
    <div className="mb-5 pb-5">
        <CompanyForm />
        <OngGoingProjects/>
        <CompletedPrjectsTable/>
        <BoardMembersTable/>
        <SectorsTable/>
    </div>
)


export default AddCompany

