import { Tree } from 'antd';
import { menuTreeData } from '@/data/tree/menu-test';
import { DownOutlined } from '@ant-design/icons';
import iconMenuFriesImage from '@/resources/images/icon-menu-fries.svg';
const treeData = menuTreeData[0].children;

function PTree() {
  return (
    <>
      <p>트리 컴포넌트 예시</p>
      <div className="tree_wrap">
        <Tree defaultExpandAll treeData={treeData} blockNode fieldNames={{ title: 'nameKor', key: 'menuId' }} />
      </div>
    </>
  );
}

export default PTree;
