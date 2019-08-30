// tslint:disable
// this is an auto generated file. This will be overwritten

export const getFast = `query GetFast($id: ID!) {
  getFast(id: $id) {
    id
    programType
    startDate
    endDate
    duration
    feedback
  }
}
`;
export const listFasts = `query ListFasts(
  $filter: ModelFastFilterInput
  $limit: Int
  $nextToken: String
) {
  listFasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      programType
      startDate
      endDate
      duration
      feedback
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    weight
    fasts {
      id
      programType
      startDate
      endDate
      duration
      feedback
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      weight
      fasts {
        id
        programType
        startDate
        endDate
        duration
        feedback
      }
    }
    nextToken
  }
}
`;
