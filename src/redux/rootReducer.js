import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import publicWelfareReducer from './slices/publicWelfare';
import ChinaMapReducer from './slices/ChinaMap';

// ----------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  whitelist: ['settings']
};

// const authPersistConfig = {
//   key: 'authJwt',
//   storage: storage,
//   keyPrefix: 'redux-',
//   whitelist: ['isAuthenticated']
// };

const appReducer = combineReducers({
  publicWelfare: publicWelfareReducer,
  ChinaMap: ChinaMapReducer
});

// Cleans up the states when logoutSuccess is triggered
const rootReducer = (state, action) => {
  if (action.type === 'authJwt/logoutSuccess') {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
