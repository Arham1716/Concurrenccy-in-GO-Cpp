import React from "react";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  const navigate = useNavigate();
  function NavigateDP() {
    navigate("/DP");
  }

  const navigate1 = useNavigate();
  function NavigateDS() {
    navigate1("/DS");
  }

  const navigate2 = useNavigate();
  function NavigateRW() {
    navigate2("/RW");
  }

  const navigate3 = useNavigate();
  function NavigatePC() {
    navigate3("/PC");
  }

  const navigate4 = useNavigate();
  function NavigateBS() {
    navigate4("/BS");
  }

  const navigate5 = useNavigate();
  function NavigateRC() {
    navigate5("/RC");
  }

  const navigate6 = useNavigate();
  function NavigateSC() {
    navigate6("/SC");
  }

  const navigate7 = useNavigate();
  function NavigateCS() {
    navigate7("/CS");
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="main-card p-4">
          <h3 className="mb-4">Concurrency Problems</h3>
          <div className="d-grid gap-3">
            <button className="btn btn-custom" onClick={NavigateDP}>
              <i className="fas fa-utensils"></i> Dining Philosophers
            </button>
            <button className="btn btn-custom" onClick={NavigateDS}>
              <i className="fas fa-drumstick-bite"></i> Dining Savages
            </button>
            <button className="btn btn-custom" onClick={NavigateRW}>
              <i className="fas fa-facebook"></i> Reader Writer
            </button>
            <button className="btn btn-custom" onClick={NavigatePC}>
              <i className="fas fa-sync-alt"></i> Producer Consumer
            </button>
            <button className="btn btn-custom" onClick={NavigateBS}>
              <i className="fas fa-cut"></i> FIFO Barber Shop
            </button>
            <button className="btn btn-custom" onClick={NavigateRC}>
              <i className="fas fa-water"></i> River Crossing
            </button>
            <button className="btn btn-custom" onClick={NavigateSC}>
              <i className="fas fa-hat-cowboy"></i> Santa Clause
            </button>
            <button className="btn btn-custom" onClick={NavigateCS}>
              <i className="fas fa-smoking"></i> Cigarette Smokers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
