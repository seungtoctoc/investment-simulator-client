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

export const simulateAsset = async (
  symbol,
  exchange,
  period,
  seed,
  monthly,
  isReinvest,
  isDollar
) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_SERVER}/api/simulate`,
      {
        symbol: symbol,
        exchange: exchange,
        period: period,
        seed: seed,
        monthly: monthly,
        isReinvest: isReinvest,
        isDollar: isDollar,
      }
    );

    return resp.data.data;
  } catch (err) {
    return err;
  }
};
