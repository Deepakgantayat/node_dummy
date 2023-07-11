import {dummyData} from '../dummyData.js'

export const getData = (async (req, res, next) => {
    try {
    res.status(200).json(dummyData);
    } catch (err) {
      return res.status(400).json('Error');
    }
  });
