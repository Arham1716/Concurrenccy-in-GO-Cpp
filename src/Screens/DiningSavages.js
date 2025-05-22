import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Import the specific graphs for this problem
import cpuGraphCPP from '../assets/cpp_graphs/DiningSavages_CPU.png';
import memoryGraphCPP from '../assets/cpp_graphs/DiningSavages_Memory.png';
import cpuGraphGO from '../assets/go_graphs/cpu_profile dining savages.jpg';
import memoryGraphGO from '../assets/go_graphs/DiningSavages_Memory.png';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DiningSavages() {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const [executionTime, setExecutionTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cpuGraph, setCpuGraph] = useState(null);
  const [memoryGraph, setMemoryGraph] = useState(null);

  const AVG_EXECUTION_TIME = 0.1;

  const runSimulation = async () => {
    const apiUrl =
      selectedLanguage === "cpp"
        ? "http://localhost:5000/DinningSavages"
        : "http://localhost:5001/DinningSavages";

    setLoading(true);
    setOutput("");
    setExecutionTime(null);
    setCpuGraph(null);
    setMemoryGraph(null);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        setOutput(data.output || "No output received.");
        const executionTimeValue = parseFloat(data.execution_time);
        
        if (!isNaN(executionTimeValue)) {
          setExecutionTime(executionTimeValue);
        } else {
          setExecutionTime(0);
        }

        // Set the appropriate graphs based on language
        if (selectedLanguage === "cpp") {
          setCpuGraph(cpuGraphCPP);
          setMemoryGraph(memoryGraphCPP);
        } else {
          setCpuGraph(cpuGraphGO);
          setMemoryGraph(memoryGraphGO);
        }
      } else {
        setOutput(`Error: ${data.error || "Unknown error occurred"}`);
      }
    } catch (error) {
      setOutput("Failed to connect to the server. Make sure it's running.");
    }

    setLoading(false);
  };

  // Chart Data
  const data = {
    labels: ["Average Execution Time", "Current Execution Time"],
    datasets: [
      {
        label: "Execution Time (seconds)",
        data: [AVG_EXECUTION_TIME, executionTime || 0],
        backgroundColor: ["#007bff", "#ff6384"],
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center py-5">
        {/* Problem Title */}
        <div className="problem-container p-4 text-center">
          <h3 className="problem-title">Problem Title: Dining Savages</h3>

          {/* Problem Description */}
          <div className="problem-description text-start">
            <p>
              The <strong>Dining Savages Problem</strong> involves a tribe of savages
              who share a large pot of food. When a savage wants to eat, they remove
              food from the pot. If the pot is empty, the savage wakes up the cook
              and then waits until the cook has refilled the pot. The cook, when
              awakened, refills the pot and then goes back to sleep.
            </p>
            <p>
              The challenge is to coordinate the savages and the cook to ensure that
              the pot is properly managed without race conditions or deadlocks, while
              maintaining proper synchronization between the cook and the savages.
            </p>
          </div>

          {/* Dropdown for Language Selection */}
          <select
            className="problem-dropdown form-select mt-3"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="cpp">C++</option>
            <option value="go">Go</option>
          </select>

          {/* Run Button */}
          <button
            className="problem-button mt-3 btn btn-primary"
            onClick={runSimulation}
            disabled={loading}
          >
            <i className="fas fa-play"></i> {loading ? "Running..." : "Run"}
          </button>
        </div>

        {/* Execution Time Card */}
        {executionTime !== null && (
          <div className="mt-4 card bg-light shadow p-3 text-center">
            <h5 className="mb-0">Execution Time</h5>
            <p className="text-primary">{executionTime.toFixed(4)} sec</p>
          </div>
        )}

        {/* Console Output Div */}
        <div className="console-window mt-4 w-100">
          <div className="console-header">Output Console</div>
          <div className="console-body">
            {loading ? <p className="text-warning">Executing...</p> : output}
          </div>
        </div>

        {/* Graph Section */}
        {executionTime !== null && (
          <div className="graph-container mt-5">
            <h5 className="text-center mb-3">Execution Time Comparison</h5>
            <div className="chart-wrapper">
              <Bar data={data} options={options} />
            </div>
          </div>
        )}

        {/* CPU and Memory Usage Graphs */}
        {executionTime !== null && (
          <div className="profiling-graphs mt-5 w-100">
            <div className="d-flex flex-column gap-4">
              {/* CPU Profiling Graph */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">CPU Profiling</h5>
                  {cpuGraph && (
                    <div className="d-flex justify-content-center">
                      <img
                        src={cpuGraph}
                        alt="CPU Profiling"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Memory Usage Graph */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Memory Usage</h5>
                  {memoryGraph && (
                    <div className="d-flex justify-content-center">
                      <img
                        src={memoryGraph}
                        alt="Memory Usage"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
