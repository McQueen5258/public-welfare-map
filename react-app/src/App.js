import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';

import AppBar from '@material-ui/core/AppBar';

function App() {
  return (
    <div>
      <AppBar >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </AppBar>
      
      {/* 地图 */}
      <Map />
      {/* 中间部分 */}
      <article className="middle-part">
       {/* 左边栏 */}
        <Sidebar />
        {/* 内容 */}
        <Content />
      </article>
    </div>
  );
}

export default App;
