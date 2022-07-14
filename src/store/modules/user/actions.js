import axios from "axios";

export default {
  async updateCurrentUser(context, user_id){
   
    //get user details and update current user 
    let response = await axios.get('https://gorest.co.in/public/v2/users/'+ user_id);

    context.commit('setCurrentUser', response.data);
  },
};
