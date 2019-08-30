// tslint:disable
// this is an auto generated file. This will be overwritten

export const createFast = `mutation CreateFast($input: CreateFastInput!) {
  createFast(input: $input) {
    id
    programType
    startDate
    endDate
    duration
    feedback
  }
}
`;
export const updateFast = `mutation UpdateFast($input: UpdateFastInput!) {
  updateFast(input: $input) {
    id
    programType
    startDate
    endDate
    duration
    feedback
  }
}
`;
export const deleteFast = `mutation DeleteFast($input: DeleteFastInput!) {
  deleteFast(input: $input) {
    id
    programType
    startDate
    endDate
    duration
    feedback
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
