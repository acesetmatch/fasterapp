/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateFastInput = {
  id?: string | null,
  programType: string,
  startDate: number,
  endDate: number,
  duration: number,
  feedback: string,
};

export type UpdateFastInput = {
  id: string,
  programType?: string | null,
  startDate?: number | null,
  endDate?: number | null,
  duration?: number | null,
  feedback?: string | null,
};

export type DeleteFastInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  weight: number,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  weight?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelFastFilterInput = {
  id?: ModelIDFilterInput | null,
  programType?: ModelStringFilterInput | null,
  startDate?: ModelIntFilterInput | null,
  endDate?: ModelIntFilterInput | null,
  duration?: ModelFloatFilterInput | null,
  feedback?: ModelStringFilterInput | null,
  and?: Array< ModelFastFilterInput | null > | null,
  or?: Array< ModelFastFilterInput | null > | null,
  not?: ModelFastFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  weight?: ModelIntFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateFastMutationVariables = {
  input: CreateFastInput,
};

export type CreateFastMutation = {
  createFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type UpdateFastMutationVariables = {
  input: UpdateFastInput,
};

export type UpdateFastMutation = {
  updateFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type DeleteFastMutationVariables = {
  input: DeleteFastInput,
};

export type DeleteFastMutation = {
  deleteFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};

export type GetFastQueryVariables = {
  id: string,
};

export type GetFastQuery = {
  getFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type ListFastsQueryVariables = {
  filter?: ModelFastFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFastsQuery = {
  listFasts:  {
    __typename: "ModelFastConnection",
    items:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      weight: number,
      fasts:  Array< {
        __typename: "Fast",
        id: string,
        programType: string,
        startDate: number,
        endDate: number,
        duration: number,
        feedback: string,
      } | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFastSubscription = {
  onCreateFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type OnUpdateFastSubscription = {
  onUpdateFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type OnDeleteFastSubscription = {
  onDeleteFast:  {
    __typename: "Fast",
    id: string,
    programType: string,
    startDate: number,
    endDate: number,
    duration: number,
    feedback: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    weight: number,
    fasts:  Array< {
      __typename: "Fast",
      id: string,
      programType: string,
      startDate: number,
      endDate: number,
      duration: number,
      feedback: string,
    } | null >,
  } | null,
};
