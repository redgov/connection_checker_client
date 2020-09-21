import actionType from "../actions/actionType";


const sample_machines = [
  {id: 0, name: 'sakura', ip_address: '172.16.1.213', last_result: 'success',
   success_time: '2020/08/28 16:50', failure_time: "2020/08/28 14:30", 
   is_active: "true", group_id: 1},
  {id: 1, name: 'v_sakura', ip_address: '172.16.1.213', last_result: 'failure',
   success_time: '2020/08/28 16:50', failure_time: "2020/08/28 16:52", 
   is_active: "false", group_id: 2},
  {id: 2, name: 'tsubaki', ip_address: '172.16.1.213', last_result: 'success',
   success_time: '2020/08/28 16:50', failure_time: "2020/08/28 14:30", 
   is_active: "true", group_id: 1},
  {id: 3, name: 'yuri', ip_address: '172.16.1.213', last_result: 'failure',
   success_time: '2020/08/28 16:50', failure_time: "2020/08/28 16:52", 
   is_active: "false", group_id: 2},
]


const machines = (state = sample_machines, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default machines
