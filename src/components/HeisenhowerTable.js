import { Priority } from "../constants";

const HeisenhowerTable = () => {
  return (
    <table>
      <tr>
        <td>
          {Priority.IMPORTANT}
          <h1>DECIDE</h1>
          <h2>Schedule a time to do it.</h2>
        </td>
        <td>
          {Priority.IMPORTANT} {Priority.URGENT}
          <h1>DO</h1>
          <h2>Do it now.</h2>
        </td>
      </tr>
      <tr>
        <td>
          <h1>DELETE</h1>
          {/* terminology of this is problematic, i dont want to be punished for leisure */}
          <h2>Eliminate it.</h2>
        </td>
        <td>
          {Priority.URGENT}
          <h1>DELEGATE</h1>
          <h2>Who can do it for you?</h2>
        </td>
      </tr>
    </table>
  );
};

export default HeisenhowerTable;
