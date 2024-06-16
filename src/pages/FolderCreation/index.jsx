import { folderData } from 'src/hooks/folderCreation';

function printNames(data, depth = 0) {
  return data.map((item) => (
    <div key={item.id} className={`pl-${depth * 4}`}>
      {item.name}
      {item.isFolder && printNames(item.items, depth + 1)}
    </div>
  ));
}

function FolderCreation() {
  return (
    <div>
      {folderData.name}
      <div className='pl-4'>{printNames(folderData.items)}</div>{' '}
    </div>
  );
}

// const styles = {
//   container: {
//     position: 'absolute',
//     width: '100%',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

export default FolderCreation;
