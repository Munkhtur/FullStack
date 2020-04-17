import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>{props.course.name}</h1>;
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <>
      <div>
        {props.course.map((part) => (
          <Part part={part} />
        ))}
      </div>
    </>
  );
};

const Total = (props) => {
  let total = 0;
  props.course.map((part) => (total = total + part.exercises));

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
