import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { withRouter } from 'react-router-dom';
import { vote, getCurrentPoll } from '../store/actions';
// import { color } from '../services/color';

Chart.register(ArcElement, Tooltip, Legend);

const color = () => {
  return ('#' + Math.random().toString(16).slice(2, 8));
}

const Poll = ({poll,vote }) => {
    
    const answers = 
    poll.options &&
    poll.options.map(option => (
      <button
        onClick={() => vote(poll._id, { answer: option.option })}
        className="button"
        key={option._id}>
        {option.option}
      </button>
    ));
    // console.log(answers);

  const data = poll.options && {
    labels: poll.options.map(option => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map(option => color()),
        borderColor: '#323643',
        data: poll.options.map(option => option.votes)
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1.2, // Adjust this value to reduce/increase the size
  };

  const chartContainerStyle = {
    position: 'relative',
    width: '400px', // Adjust this value to change the container size
    height: '400px', // Adjust this value to change the container size
    margin: '0 auto'
  };

  return (
    <div>
      <h3 className="poll-title">{poll.question}</h3>
      <div className="buttons_center">{answers}</div>
      {poll.options && 
      <div style={chartContainerStyle}>
      <Pie data={data} options={options}/>
      </div>
      }
    </div>
  );
};

export default withRouter(connect(
  store => ({
    poll: store.currentPoll
  }),
  { getCurrentPoll, vote }
)(Poll));