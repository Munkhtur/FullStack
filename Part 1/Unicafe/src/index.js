import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = (props) => (
  <>
    <td> {props.text}</td>
    {props.text === 'Positive' ? (
      <td>{props.value}%</td>
    ) : (
      <td>{props.value}</td>
    )}
  </>
);

const Statistics = ({ good, bad, neutral, all }) => {
  const avg = (good - bad) / all;
  const positive = (good * 100) / all;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
          </tr>
          <tr>
            <Statistic text='good' value={good} />
          </tr>
          <tr>
            <Statistic text='neutral' value={neutral} />
          </tr>
          <tr>
            <Statistic text='bad' value={bad} />
          </tr>
          <tr>
            <Statistic text='All' value={all} />
          </tr>
          <tr>
            <Statistic text='Average' value={avg} />
          </tr>
          <tr>
            <Statistic text='Positive' value={positive} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <h2>statistics</h2>
      {good > 0 || bad > 0 || neutral > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      ) : (
        ''
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
