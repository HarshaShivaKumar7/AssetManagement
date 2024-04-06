import React from "react";

import CrudModule from "@/modules/CrudModule";
import CreatePRForm from "@/forms/CreatePRForm"; // Assuming you have created a new form component for PR

function Customer() {
  // Change the entity to match the PR context, if necessary
  const entity = "purchaseRequest";

  // Adjust the searchConfig for fields relevant to PR
  const searchConfig = {
    displayLabels: ["entity", "requestedBy", "department"],
    searchFields: "entity,requestedBy,department",
    outputValue: "_id",
  };

  // Adjust the panelTitle and dataTableTitle to reflect PR related data
  const panelTitle = "Purchase Request Panel";
  const dataTableTitle = "Purchase Requests List";

  // Adjust the readColumns and dataTableColumns to match PR data fields
  const readColumns = [
    // ...columns for displaying PR details
  ];
  const dataTableColumns = [
    // ...columns for PR list view
  ];

  // Change button text to reflect PR context
  const ADD_NEW_ENTITY = "Add new purchase request";
  const DATATABLE_TITLE = "Purchase Requests List";
  const ENTITY_NAME = "purchaseRequest"; // Should match the actual entity name used in your system
  const CREATE_ENTITY = "Create Purchase Request";
  const UPDATE_ENTITY = "Update Purchase Request";

  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    // entityDisplayLabels might not be necessary for PR; adjust as needed
  };

  return (
    <CrudModule
      createForm={<CreatePRForm />} // Use the CreatePRForm for creating new PRs
      // If an update form is needed for PRs, create and use UpdatePRForm instead
      updateForm={<CreatePRForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Customer;
