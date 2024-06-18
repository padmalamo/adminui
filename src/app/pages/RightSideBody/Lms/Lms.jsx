import React, { useState } from 'react';
import ReportForm from './ReportForms';

function Lms() {
    const [showBulkUpload, setShowBulkUpload] = useState(false);
    const [showLmsReport, setShowLmsReport] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [lender, setLender] = useState('');
    const lenders = ['riviera', 'Indifi capital', 'northernarc', 'caspian']; // Example lenders array

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (loanType) => {
        // Implement the logic to upload the file based on loanType, username, and password
        console.log(`Submitting for ${loanType}`, { username, password, file });
    };

//     const handleReportClick = (reportType, startDate,endDate,selectLender,shadowlmslender,appIds) => {
//         // Implement the logic to handle report parameters
//         <div class="dialog-contents" style="width:300px;">
// 		<div layout="row" layout-align="center" flex class="marginT5">
//             <label for="bcc">Email Ids(can be comma separated emails):
//                 <input type="text" class="form-control" id="bcc" ng-model="email" required/>
//             </label>
//         </div>
//         <div class="divider" style="height: 10px;"></div> 
//         <div ng-show="startDateShow == 'true'" layout="row" layout-align="center" flex>
//             <label>Start Date
//                 <datepicker date-format="MM/dd/yyyy" date-typer="true" date-set>
//                     <input placeholder="select date" type="text" ng-model="startDate"  ng-pattern="/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)[0-9]{2})$/" class="input" aria-invalid="false"/>
//                 </datepicker>
//              </label>
//         </div>
//         <div class="divider" style="height: 10px;"></div> 
//         <div ng-show="endDateShow == 'true'" layout="row" layout-align="center" flex >
//             <label>End Date
//                 <datepicker date-format="MM/dd/yyyy" date-typer="true" date-set>
//                     <input placeholder="select date" type="text" ng-model="endDate" ng-pattern="/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)[0-9]{2})$/" class="input" aria-invalid="false"/>
//                 </datepicker>
//             </label>
//         </div>
//         <div class="divider" style="height: 10px;"></div> 
    
//         <div ng-show="enterAppIdshow == 'true'" layout="row" layout-align="center" flex >
//             <label for="bcc">APP Ids (enter comma separated App Ids):
//                 <input type="text" class="form-control" id="bcc" ng-model="appIds"/>
//             </label>
//         </div>

//         <div ng-show="shadowlendershow == 'true'" class="form-group">
//             <label>Select shadow lms Lender</label>
//             <select  ng-model="shadowlmslender">
//                 <option ng-repeat="lender in allshadowlenders" value="{{lender}}">{{lender}}</option>
//             </select>
//         </div>

//         <div ng-show="lender == 'true'" class="form-group">
//             <label>Select Lender</label>
//             <select  ng-model="lenderfilter">
//                 <option ng-repeat="lender in alllenders" value="{{lender.name}}">{{lender}}</option>
//             </select>
//         </div>
       
//         <div class="divider" style="height: 10px;"></div> 
//         <div layout="row" layout-align="end center" flex class="marginT10">
//             <button ng-click="closeThisDialog()" class="button  md-button md-default-theme">Cancel</button>
//             <button ng-click="downloadReport()" class="button primary-button md-button md-default-theme" >Email Report</button>
//         </div>
    
// </div>

//         console.log(`Report Type: ${reportType}`, params);
//         // You can set states or perform any other actions based on reportType and params
//     };

    return (
        <>
            <div className="panel panel-default marginT20">
                <div className="panel-heading text-center paddingFix">LMS Options</div>
                <ol>
                    <li><a href="#" onClick={() => setShowBulkUpload(!showBulkUpload)}>DRE Bulk Upload Transaction</a></li>
                    <li><a href="#" onClick={() => setShowLmsReport(!showLmsReport)}>LMS Reports</a></li>
                    <li><a href="/update">Update Request Body</a></li>
                    <li><a href="/bulkupdatelms">Bulk Update LMS transactions</a></li>
                    <li><a href="/updatelms">Update ReceiptNo Or Payment Type in LMS transactions</a></li>
                    <li><a href="/undolmstransaction">Undo LMS transactions</a></li>
                    <li><a href="/calculatewaiver">Calculate Backdated Transaction Waiver</a></li>
                    <li><a href="/markwaiver">Mark Waiver in LMS</a></li>
                    <li><a href="/undoBackdatedPayment">Undo Backdated Payment</a></li>
                    <li><a href="/excessWrongRefund">Handle Excess/Wrong Refund in LMS</a></li>
                    <li><a href="/addBackdatedPenalty">Add backdated Penalty in LMS</a></li>
                    <li><a href="/removeBackdatedPenalty">Remove backdated Penalty in LMS</a></li>
                    <li><a href="/listOfPreFetchedReport">Downloaded Report</a></li>
                </ol>
            </div>

            {showBulkUpload && (
                <div className="panel panel-default marginT20">
                    <div className="panel-heading text-center paddingFix">BULK UPLOAD TRANSACTIONS</div>

                    <div className="panel-body" style={{ lineHeight: 1.5 }}>
                        <div className="form-group">
                            <label>Select Lender</label>
                            <select value={lender} onChange={(e) => setLender(e.target.value)}>
                                {lenders.map((lender, index) => (
                                    <option key={index} value={lender}>{lender}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p>Kindly verify the following before uploading the DRE :</p>
                            <ol>
                                <li>DRE must be in excel format.(.xlsx)</li>
                                <li>Should only have the following columns in given order: id, loan_id, Transactions, receipt_number, payment_type_id, value_date, transaction_date, charge_id, transaction_type, internalReferenceId, APP ID</li>
                                <li>'transaction_date' & 'value_date' must be in "YYYY-MM-DD" format.</li>
                                <li>Non positive transactions must not be present in the DRE.</li>
                                <li>The worksheet containing DRE data must be named "For Upload".</li>
                                <li>There must be no entry whose 'value_date' precedes last 5th.</li>
                                <li>For Term Loan, the supported 'transaction_type' are "Repayment", "Charge", "Prepayment", "Refund", "Waive Charge".</li>
                                <li>For LOC, the supported 'transaction_type' are "Repayment", "Charge" and "Refund".</li>
                                <li>For PF, the supported 'transaction_type' are "Repayment", "Disbursal".</li>
                                <li>For Bullet loan, the supported 'transaction_type' are "Repayment", "Charge" and "Refund".</li>
                                <li>The sheet must be sorted by 'value_date' in ascending order.</li>
                            </ol>

                            <span style={{ color: 'red' }}><i>DRE must satisfy all of the above conditions to be uploaded successfully.</i></span><br />
                            <span style={{ color: 'rgb(15, 201, 15)' }}><i>DRE upload status shall be mailed post processing. Wait for the success/error message to ensure successful upload.</i></span>

                            <span><br /><br />Kindly use your <strong> Mifos credentials</strong> below.<br /><br /></span>
                            <form name="loginForm" noValidate autoComplete="off">
                                <div>
                                    <fieldset className="form-group">
                                        <label htmlFor="username">Mifos Username</label>
                                        <input type="text" className="form-control" id="username" name="username" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '33.667%' }} />
                                        <span className="text-danger help-text">Please enter your username.</span>
                                    </fieldset>
                                    <br />
                                    <fieldset className="form-group">
                                        <label htmlFor="password">Mifos Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '33.667%' }} />
                                        <span className="text-danger help-text">Please enter your password.</span>
                                    </fieldset>
                                    <br />
                                    <input id="DREfile" type="file" onChange={handleFileChange} />
                                    <br />
                                    <span>
                                        <input type="button" value="Submit for Term Loan" onClick={() => handleSubmit('term')} />
                                    </span>
                                    <span>
                                        <input type="button" value="Submit for LOC" onClick={() => handleSubmit('loc')} />
                                    </span>
                                    <span>
                                        <input type="button" value="Submit for PF" onClick={() => handleSubmit('purchase_finance')} />
                                    </span>
                                    <span>
                                        <input type="button" value="Submit for Bullet" onClick={() => handleSubmit('bullet')} />
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {showLmsReport && (
                <div className="panel panel-default marginT20">

                    <div className="panel-heading text-center paddingFix">LMS REPORTS</div>

                    <div className="panel-body" style={{ lineHeight: 1.5 }}>
                        <div className="loader"></div>
                        <div className="form-group">
                            <label>Select Lender</label>
                            <select value={lender} onChange={(e) => setLender(e.target.value)}>
                                {lenders.map((lender, index) => (
                                    <option key={index} value={lender}>{lender}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <ol>
                                <li><a href="#" onClick={() => handleReportClick('Month end Report Term Loan', 'true', 'false')}>Month end Report - Term Loan</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Month end Report Specific Term Loan', 'true', 'false', 'true')}>Month end Report - Specific Term Loan</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Month end Report Savings/OD', 'true', 'false')}>Month end Report - Savings/OD</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Month end Report PF', 'true', 'false')}>Month end Report - PF</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Daily Transaction Report', 'true', 'true')}>Daily Transaction Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Daily Undo Transaction Report', 'true', 'true')}>Daily Undo Transaction Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Charges Paid Report', 'true', 'true')}>Charges Paid Report/Paid Waiver Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Waiver Report', 'true', 'true')}>Waiver Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Repayment schedule Report', 'false', 'false', 'true')}>Repayment schedule Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Settlement breakdown Report', 'true', 'true')}>Settlement & Waiver breakdown Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Repayment Breakdown Report', 'true', 'true')}>Repayment Breakdown Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Advance Settlement Breakdown Report', 'true', 'true')}>Advance Settlement Breakdown Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('POS movement for IC Report')}>POS movement for IC Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Sync Loan Data Report')}>Sync Loan Data Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('New ROI Data Report')}>New ROI + InterestStartFromDate Data Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Loan Excess Data Report')}>Loan Excess Data Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Savings Excess Data Report')}>Savings Excess Data Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Foreclosure Report', 'true', 'false', 'true', 'false')}>Foreclosure With OR without charges Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Outstanding Movement Report', 'false', 'false', 'false', 'false')}>O/S movement for interest calculation for Savings loan</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Shadow LMS Report', 'true', 'false', 'false', 'true')}>Shadow LMS Lender Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('MBB Report', 'true', 'false')}>Monthly Billing Bullet Month End Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('ALM Report', 'false', 'true')}>ALM Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('ALM Report For Bullet', 'false', 'true')}>ALM Report For Bullet</a></li>
                                <li><a href="#" onClick={() => handleReportClick('ALM Report For MBB', 'false', 'true')}>ALM Report For MBB</a></li>
                                <li><a href="#" onClick={() => handleReportClick('ALM Report For LOC', 'false', 'true')}>ALM Report For LOC</a></li>
                                <li><a href="#" onClick={() => handleReportClick('DPD Movement Report', 'true', 'false', 'true')}>DPD Movement Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Unpaid Waiver Report', 'true', 'true')}>Unpaid Waiver Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Charges paid MBB', 'true', 'true')}>Bounce/Overdue Paid Charges - MBB</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Loan Tagging Report', 'false', 'false', 'false', 'false', 'true')}>Loan Tagging Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Merge Report For Specific Apps', 'true', 'false', 'true')}>Merge Report - Specific Apps</a></li>
                                <li><a href="#" onClick={() => handleReportClick('Daily Anr Report', 'false', 'true', 'true')}>Daily ANR Report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('DLG Loan tagging report', 'true', 'true', 'false', 'false', 'false')}>DLG Loan tagging report</a></li>
                                <li><a href="#" onClick={() => handleReportClick('UCIC Report', 'false', 'true', 'true')}>UCIC Report</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Lms;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

{/* // function LmsController() { */}
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [fileName, setFileName] = useState('');
//   const [requestbody, setRequestBody] = useState({});
//   const [updateTransaction, setUpdateTransaction] = useState({});
//   const [undoTransaction, setUndoTransaction] = useState({});
//   const [transactions, setTransactions] = useState([]);
//   const [links, setLinks] = useState([]);
//   const [allBackdateTransactions, setAllBackdateTransactions] = useState([]);
//   const [allLenders, setAllLenders] = useState([]);
//   const [lender, setLender] = useState('riviera');

//   useEffect(() => {
//     fetchAllLmsLenders();
//   }, []);

//   const fetchAllLmsLenders = () => {
//     axios.post(appConfig.urls.getAllLmsLenders.replace(':lendername', 'indifi capital'))
//       .then((response) => {
//         if (response.data) {
//           setAllLenders(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching all lenders:', error);
//       });
//   };

//   const uploadDREFile = (file, type) => {
//     // Implement file upload logic using axios or fetch
//   };

//   const updateTxnFile = (file, type) => {
//     // Implement update transaction file logic using axios or fetch
//   };

//   const enterLmsReportParameter = (report, startDateShow, endDateShow, enterAppIdshow, shadowlendershow, lender) => {
//     // Implement entering LMS report parameters logic
//   };

//   // Implement other functions similarly

//   return (
//     <div>
//       {/* Render your UI components here */}
//     </div>
//   );
// }

// export default LmsController;
