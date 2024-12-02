import axios from 'axios';

export const findAssets = async (keyword, limit) => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_SERVER}/api/find`, {
      params: {
        keyword: keyword,
        limit: limit,
      },
    });
    return resp.data.data;
  } catch (err) {
    return err;
  }
};
