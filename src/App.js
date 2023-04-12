import { useDispatch, useSelector } from 'react-redux';
import { setName as setStudentName, setGender } from './store/stuSlice';
import { setAddress, setSchoolName } from './store/schSlice';

const App = () => {
  // useSelector
  // parameter state is the all of the states in the store, so most of time we just need one of the states
  //we can get the member of the states, for example here: student, which comes from configureStore's member
  const { school, student } = useSelector((state) => state);
  // console.log(student);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {student.name} in the {school.name} located in {school.address}
        <br />
        {student.age} <br />
        {student.gender} <br />
        {student.address} <br />
      </p>

      <button
        onClick={() => {
          dispatch(setStudentName('Test'));
        }}
      >
        ChangeName
      </button>

      <button
        onClick={() => {
          dispatch(setGender('unknown'));
        }}
      >
        ChangeGender
      </button>
      <button
        onClick={() => {
          dispatch(setSchoolName('UNITEC'));
        }}
      >
        School
      </button>

      <button
        onClick={() => {
          dispatch(setAddress('Mount Albert in Auckland'));
        }}
      >
        Location
      </button>
    </div>
  );
};
export default App;
