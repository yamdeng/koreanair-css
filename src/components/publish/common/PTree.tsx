import { Tree } from 'antd';
import { menuTreeData } from '@/data/tree/menu-test';
const treeData = menuTreeData[0].children;

function PTree() {
  return (
    <>
      <p>트리 컴포넌트 예시</p>
      <Tree defaultExpandAll treeData={treeData} blockNode fieldNames={{ title: 'nameKor', key: 'menuId' }} />
    </>
  );
}

export default PTree;
