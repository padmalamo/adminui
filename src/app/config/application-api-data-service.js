import { CREATE, READ } from "./services/ServerClient";
import { dadAPI, stagingAPI } from "./services/ServerClientInterceptor";

const authorizationHeader = { tokenAuthorization: true };

//UPLOAD MARCHANT DATA
// from stagingAPI 
const getAnchors = (id) => {
  return READ(stagingAPI, `/anchors`, {}, authorizationHeader);
};

//BULK REJECTION
// from dadAPI
const getRejectionReasons = () => {
  return READ(dadAPI, `/applications/rejection_reasons`, {}, authorizationHeader);
};


const postBulkRejection = (payload) => {
  return CREATE(stagingAPI, '/applications/bulk-rejection', payload, authorizationHeader)
    .then(response => {
      if (response.data.success) {
        console.log("Bulk rejection successful");
      } else {
        console.error("Bulk rejection failed");
      }
      return response;
    })
    .catch(error => {
      console.error("An error occurred during bulk rejection:", error);
      throw error;
    });
};

//BULK ASSIGN
// from stagingAPI
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

const postBulkAssign=(payload)=>{
  return CREATE(stagingAPI, '/applications/bulk-assign', payload, authorizationHeader)
    .then(response => {
      if (response.data.success) {
        console.log("Bulk assign successful");
      } else {
        console.error("Bulk assign failed");
      }
      return response;
    })
    .catch(error => {
      console.error("An error occurred during bulk assign:", error);
      throw error;
    });
}
//BULK LOAN CLOSURE
const postBulkLoanClosure = (payload) => {
  return CREATE(ApplicationAPIDataService, '/applications/bulk-loan-close', payload, authorizationHeader)
    .then(response => {
      if (response.data.success) {
        console.log("Bulk loan closure successful");
      } else {
        console.error("Bulk loan closure failed:", response.data.message);
      }
      return response;
    })
    .catch(error => {
      console.error("An error occurred during bulk loan closure:", error);
      throw error;
    });
};
//CREATE ANCHOR
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
  postBulkRejection,
  postBulkAssign,
  postBulkLoanClosure
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
