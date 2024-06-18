import { READ } from "./services/ServerClient";
import { dadAPI, stagingAPI } from "./services/ServerClientInterceptor";

const authorizationHeader = { tokenAuthorization: true };

// from dadAPI
const getRejectionReasons = () => {
  return READ(dadAPI, `/applications/rejection_reasons`, {}, authorizationHeader);
};

// const getCreateAnchorData=()=>{
//   return READ(stagingAPI,'',{},authorizationHeader);
// }
// from stagingAPI
const getAnchors = (id) => {
  return READ(stagingAPI, `/anchors`, {}, authorizationHeader);
};

// from stagingAPI
// $http.post(appConfig.urls.ach_present ,{
//   'achValues' : $scope.achValues,
//   'settlement_date' : scope.data.settlement_date
// })
const getBulkAssignData = () => {
  const filter = {
    group_name: {
      $in: [
        "Loan Coordinator",
        "ICR",
        "Operations",
        "Operations QC",
        "Lender",
        "FI Coordinator",
        "Agency Coordinator",
        "Admin"
      ]
    }
  };
  const filterStr = encodeURIComponent(JSON.stringify(filter));
  return READ(stagingAPI, `/user_groups?filter=${filterStr}`, {}, authorizationHeader);
};

// from stagingAPI
const getCreateAnchorData = () => {
  return READ(stagingAPI, '/anchors?count=1000&fields=id,name,industry&offset=0', {}, authorizationHeader);
};

// Uncomment and modify the following functions as needed:
// const getApplicationLenderHistory = (id) => {
//   return READ(stagingAPI, `/application/applicationLenderHistory/${id}`, {}, authorizationHeader);
// };
// const getApplicationLoanType = (id) => {
//   return READ(stagingAPI, `/loan_type/${id}`, {}, authorizationHeader);
// };
// const getApplicationLoanRequest = (id) => {
//   return READ(stagingAPI, `/loan-requests/${id}`, {}, authorizationHeader);
// };
// const getApplicationSwiggyOffers = (id) => {
//   return READ(stagingAPI, `/swiggy/swiggy_offers/${id}`, {}, authorizationHeader);
// };
// const getApplicationDocumentsChecklist = (id) => {
//   return READ(stagingAPI, `/applications/${id}/documents/checklist`, {}, authorizationHeader);
// };
// const getApplicationdocumentationModes = (id) => {
//   return READ(stagingAPI, `/documentation_modes/${id}`, {}, authorizationHeader);
// };
// const getRequestTypes = (id) => {
//   return READ(stagingAPI, `/request_types`, {}, authorizationHeader);
// };
// const getDispositions = (id) => {
//   return READ(stagingAPI, `/dispositions?sort=disposition_description`, {}, authorizationHeader);
// };
// const getLenders = (id) => {
//   return READ(stagingAPI, `/dispositions?sort=disposition_description`, {}, authorizationHeader);
// };
// const getWorkQueues = (id) => {
//   return READ(stagingAPI, `/dispositions?sort=disposition_description`, {}, authorizationHeader);
// };
// const getApplicationDocumentsToSign = (application_id, loan_id) => {
//   return READ(stagingAPI, `/applications/${application_id}/loans/${loan_id}/esign_documents`, {}, authorizationHeader);
// };
// const getApplicationESignTime = (application_id) => {
//   return READ(stagingAPI, `/esign/application/${application_id}/get_esign_time`, {}, authorizationHeader);
// };

export const ApplicationAPIDataService = {
  getRejectionReasons,
  getAnchors,
  getBulkAssignData,
  getCreateAnchorData,
  // getApplicationLoanRequest,
  // getApplicationSwiggyOffers,
  // getApplicationDocumentsChecklist,
  // getApplicationdocumentationModes,
  // getRequestTypes,
  // getDispositions,
  // getLenders,
  // getWorkQueues,
  // getApplicationTimeline,
  // getApplicationDocumentsToSign,
  // getApplicationESignTime
};
