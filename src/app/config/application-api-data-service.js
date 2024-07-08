import { CREATE, READ } from "./services/ServerClient";
import { dadAPI, stagingAPI } from "./services/ServerClientInterceptor";

const authorizationHeader = { tokenAuthorization: true };

//UPLOAD MARCHANT DATA
// from stagingAPI 
const getAnchors = (id) => {
  return READ(stagingAPI, `/anchors`, {}, authorizationHeader);
};

const postMarchantData = (formData) => {
  const payload = new FormData();
  payload.append('file', formData.file);
  payload.append('anchor_name', formData.anchor);

  return CREATE(stagingAPI, '/support/merchant-data-upload', payload, authorizationHeader)
    .then(response => {
      if (response.data.success) {
        console.log('Merchant data upload successful');
      } else {
        console.error('Merchant data upload failed');
      }
    })
    .catch(error => {
      console.error('An error occurred during merchant data upload:', error);
      throw error;
    });
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
//SWAP ESCROW PAYMENT
const postSwapEscrow=(payload)=>{
  return CREATE(stagingAPI,'/applications/swap-escrow-payments',payload, authorizationHeader)
  .then(response => {
    if (response.data.success) {
      console.log("swap escrow payment successful");
    } else {
      console.error("swap escrow payment failed");
    }
    return response;
  })
  .catch(error => {
    console.error("An error occurred during swap escrow payment:", error);
    throw error;
  });
}

//BULK DUPLICATION AND REJECTION( 2 post methods api are hitting one is bulk rejection already defined above)
const postBulkDuplication=(payload)=>{
  return CREATE(stagingAPI,'jobs/applications/bulkCopy', payload, authorizationHeader)
  .then(response=>{
    if (response.data.success) {
      console.log("Bulk Duplication successful");
    } else {
      console.error("Bulk Duplication failed");
    }
    return response;
  })
  .catch(error => {
    console.error("An error occurred during Bulk Duplication:", error);
    throw error;
  });
}

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
  return CREATE(stagingAPI, '/applications/bulk-loan-close', payload, authorizationHeader)
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
const getRequestTypes = () => {
  return READ(stagingAPI, '/request_types?fields=id,name', {}, authorizationHeader);
};

const postCreateAnchor=(payload)=>{
  return CREATE(stagingAPI,'support/anchor/create',payload, authorizationHeader)
  .then(response => {
    if (response.data.success) {
      console.log("create anchor successful");
    } else {
      console.error("create anchor failed:", response.data.message);
    }
    return response;
  })
  .catch(error => {
    console.error("An error occurred during creating anchor:", error);
    throw error;
  });
}
//lms sync escrow cases
const postEscrowLmsCases=(payload)=>{
  return CREATE(stagingAPI,'support/escrow-lms-report',payload,authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("lms sync escrow cases successful")
    }else{
      console.error("lms sync escrow cases failed:", response.data.message);
    }
    return response;
  })
  .catch(error=>{
    console.log("An error occured during lms sync escrow cases:", error);
    throw error;
  })
}
//add ifsc code
const postIfscCode=(payload)=>{
  return CREATE(stagingAPI,'/ifsc_code', payload, authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("ifsc code added successfully")
    }else{
      console.error("ifsc code addition failed:", response.data.message)
    }
  })
  .catch(error=>{
    console.log("An error occured during addition of ifsc code:", error);
    throw error;
  })
}
// delete enach
const postDeleteEnach=(payload)=>{
  return CREATE(dadAPI,'/deleteEnach', payload, authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("delete enach successfully")
    }else{
      console.error("delete enach failed:", response.data.message)
    }
  })
  .catch(error=>{
    console.log("An error occured during addition of delete enach:", error);
    throw error;
  })
}
// ach registration
const postAchRegistration=(payload)=>{
  return CREATE(stagingAPI,'/support/ach-data', payload, authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("ach registration successfully")
    }else{
      console.error("ach registration failed:", response.data.message)
    }
  })
  .catch(error=>{
    console.log("An error occured during addition of ach registration:", error);
    throw error;
  })
}
// credit flag bulk upload
const postCreditFlagBulkUpload=(payload)=>{
  return CREATE(stagingAPI,'', payload, authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("credit flag bulk upload successfully")
    }else{
      console.error("credit flag bulk upload failed:", response.data.message)
    }
  })
  .catch(error=>{
    console.log("An error occured during addition of credit flag bulk upload:", error);
    throw error;
  })
}
// clear cache
const getClearCache = (cacheType = 'cibil') => {
  return READ(dadAPI, `/cipher/clear_cache/${cacheType}`, {}, authorizationHeader)
    .then(response => {
      if (response.data.success) {
        console.log('Cache cleared successfully');
      } else {
        console.error('Failed to clear cache:', response.data.message);
      }
      return response;
    })
    .catch(error => {
      console.error('An error occurred while clearing cache:', error);
      throw error;
    });
};

// loan tagging data
const postLoanTaggingData=(payload)=>{
  return CREATE(stagingAPI,'', payload, authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("loan tagging data successfully")
    }else{
      console.error("loan tagging data failed:", response.data.message)
    }
  })
  .catch(error=>{
    console.log("An error occured during addition of loan tagging data:", error);
    throw error;
  })
}
// pin code data
const postPinCodeData=(payload)=>{
  return CREATE(stagingAPI,'/insert_pincode_details', payload, authorizationHeader)
  .then(response=>{
    if(response.data.success){
      console.log("pin code data successfully")
    }else{
      console.error("pin code data failed:", response.data.message)
    }
  })
  .catch(error=>{
    console.log("An error occured during addition of pin code data:", error);
    throw error;
  })
}

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
  postBulkLoanClosure,
  postMarchantData,
  postSwapEscrow,
  postBulkDuplication,
  getRequestTypes,
  postCreateAnchor,
  postEscrowLmsCases,
  postIfscCode,
  postDeleteEnach,
  postAchRegistration,
  postCreditFlagBulkUpload,
  getClearCache,
  postPinCodeData,
  postLoanTaggingData
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
