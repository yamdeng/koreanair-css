import { Link } from 'react-router-dom';

function CommonPublishList() {
  return (
    <div>
      <table className="publish-app-table">
        <tr>
          <th>
            <Link to={`common/sample`}>sample</Link>
          </th>
          <th>Last Name</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>
            <Link to={`common/sample-react-select`}>Your Name</Link>
          </td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
        </tr>
      </table>
    </div>
  );
}

export default CommonPublishList;
