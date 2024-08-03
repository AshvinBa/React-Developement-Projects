function ToDoTask() {
  let todotask = 'Buy Milk';
  let date = '11-07-2024';

  return (
    <div className="container">
    <div className="row align-items-center justify-content-center my-row">
      <div className="col-6 mb-3">{todotask}</div>
      <div className="col-4 mb-3">{date}</div>
      <div className="col-2 mb-3"><button type="button" className="btn btn-danger my-btn">Dele</button></div>
    </div>
    </div>
  );
}

export default ToDoTask;