import actionType from "../actions/actionType";


const sample_groups = [
  {id: 1, name: "AIX", to_addresses: "aaa,"},
  {id: 2, name: "HP-UX", to_addresses: "bbb"},
  {id: 3, name: "Solaris", to_addresses: "ccc"},
];


const groups = (state = sample_groups, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default groups
