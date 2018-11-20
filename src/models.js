import axios from 'axios';

// profile model
export const profile = {
  state: '',
  reducers: {
    addBy(state, payload) {
      return  payload
    }
  },
  effects: (dispatch) => ({
    async getInfo(payload, state) {
      const result = await axios.get('http://www.mocky.io/v2/5a5e38f3330000b0261923a5')
      
       dispatch.profile.addBy(result.data.profile)
    }
  })
};
