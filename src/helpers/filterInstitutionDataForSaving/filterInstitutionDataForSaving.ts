interface PlaidInstitution {
  institution_name: string;
  institution_id: string;
}

interface PlaidMetadata {
  metadataJson: string;
  linkSessionId: string;
  institution: PlaidInstitution;
  accounts: any[];
}

interface PlaidItemData {
  public_token: string;
  metadata: PlaidMetadata;
}

/**
 * filterInstitutionDataForSaving
 * @returns
 * filtered plaid data item
 */
export default (data: PlaidItemData) => {
  const filteredPlaidItem = {
    public_token: '',
    institution: {
      id: '',
      name: '',
    },
  };

  filteredPlaidItem.public_token = data.public_token;
  filteredPlaidItem.institution.id = data.metadata.institution.institution_id;
  filteredPlaidItem.institution.name =
    data.metadata.institution.institution_name;
  return filteredPlaidItem;
};
