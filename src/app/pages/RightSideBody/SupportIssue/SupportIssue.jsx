import React, { useEffect, useState } from 'react';
import UploadMarchantData from './UploadMarchantData/UploadMarchantData';
import BulkRejection from './BulkRejection/BulkRejection';
import SwapEscrowPayments from './SwapEscrow/SwapEscrowPayments';
import BulkDuplicationAndRejection from './BulkDuplicationAndRejection/BulkDuplicationAndRejection';
import BulkAssign from './BulkAssign/BulkAssign';
import BulkLoanClosure from './BulkLoanClosure/BulkLoanClosure';
import ExceptionList from './ExceptionList/ExceptionList';
import BulkPaymentsLinks from './BulkPaymentsLinks/BulkPaymentsLinks';
import CreateAnchor from './CreateAnchor/CreateAnchor';
import LmsSyncEscrowCases from './LmsSyncEscrowCases/LmsSyncEscrowCases';
import SplitReport from './SplitReport/SplitReport';
import PaymentReport from './PaymentReport/PaymentReport';
import PolicyAddedCase from './PolicyAddedCase/PolicyAddedCase';
import AddIFSCCode from './AddIFSCCode/AddIFSCCode';
import DeleteEnach from './DeleteEnach/DeleteEnach';
import AchRegistration from './AchRegistration/AchRegistration';
import CreditFlagBulkUpload from './CreditFlagBulkUpload/CreditFlagBulkUpload';
import ClearCache from './ClearCache/ClearCache';
import LoanTagging from './LoanTagging/LoanTaging';
import UpdatePincodeData from './UpdatePincodeData/UpdatePincodeData';
// import BulkRejection from './BulkRejection/Bulkrejection';

function SupportIssue() {
    const [supportIssueFilter, SetsupportIssueFilter]=useState([]);
    return ( <>
    <div className="RightMainBody">
        {/* <div layout="coloumn">


        <h1>Support Issue</h1>
        <select>
            <option value=""> none </option>
            <option value="user"> User </option>
            <option value="anchor"> Anchor </option>
            <option value="application"> Application </option>
            <option value="borrower"> Borrower </option>
        </select>
        </div>*/}
        <br/> 
        <UploadMarchantData ></UploadMarchantData>
        <BulkRejection></BulkRejection>
        <SwapEscrowPayments></SwapEscrowPayments>
        <BulkDuplicationAndRejection></BulkDuplicationAndRejection>
        <BulkAssign></BulkAssign>
        {/* <BulkRejectiontry></BulkRejectiontry> */}
        <BulkLoanClosure></BulkLoanClosure>
        <ExceptionList></ExceptionList>
        <BulkPaymentsLinks></BulkPaymentsLinks>
        <CreateAnchor></CreateAnchor>
        <LmsSyncEscrowCases></LmsSyncEscrowCases>
        <SplitReport></SplitReport>
        <PaymentReport></PaymentReport>
        <PolicyAddedCase></PolicyAddedCase>
        <AddIFSCCode></AddIFSCCode>
        <DeleteEnach></DeleteEnach>
        <AchRegistration></AchRegistration>
        <CreditFlagBulkUpload></CreditFlagBulkUpload>
        <ClearCache></ClearCache>
        <LoanTagging></LoanTagging>
        <UpdatePincodeData></UpdatePincodeData>
    </div>
    </> );
}

export default SupportIssue;