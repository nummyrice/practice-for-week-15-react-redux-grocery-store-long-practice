import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE'


//action creator
export const populateProduce = () => {
    console.log('!@#$action creator')
  return {
    type: POPULATE,
    produce: produceData
  };
};

//reducer
export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE:
          const newState = {};
          action.produce.forEach(produce => {
              newState[produce.id] = produce;
          })
          return newState;
      default:
        return state;
    }
  }

