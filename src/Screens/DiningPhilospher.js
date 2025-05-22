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

// Import images directly
import cppCpuGraph from '../assets/cpp_graphs/DiningPhilosopher_CPU.png';
import cppMemoryGraph from '../assets/cpp_graphs/DiningPhilosopher_Memory.png';
import goCpuGraph from '../assets/go_graphs/DiningPhilosopher_CPU.png';
import goMemoryGraph from '../assets/go_graphs/DiningPhilosopher_Memory.png';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DiningPhilosopher() {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const [executionTime, setExecutionTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const AVG_EXECUTION_TIME = 0.1; // Given average execution time

  const runSimulation = async () => {
    const apiUrl =
      selectedLanguage === "cpp"
        ? "http://localhost:5000/DiningPhilosopher"
        : "http://localhost:5001/DiningPhilosopher";

    setLoading(true);
    setOutput("");
    setExecutionTime(null);

    try {
      console.log(`Attempting to connect to: ${apiUrl}`);
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Received data:', data);

      setOutput(data.output || "No output received.");

      // Convert executionTime from string to number (float)
      const executionTimeValue = parseFloat(data.execution_time);

      // Check if the conversion was successful
      if (!isNaN(executionTimeValue)) {
        setExecutionTime(executionTimeValue);
      } else {
        setExecutionTime(0); // Set to 0 if conversion failed
      }

    } catch (error) {
      console.error('Error details:', error);
      setOutput(`Failed to connect to the server: ${error.message}`);
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
        backgroundColor: ["#007bff", "#ff6384"], // Blue for Avg, Red for Current
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure it fills the container
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Determine which graphs to use based on selected language
  const cpuGraph = selectedLanguage === "cpp" ? cppCpuGraph : goCpuGraph;
  const memoryGraph = selectedLanguage === "cpp" ? cppMemoryGraph : goMemoryGraph;

  return (
    <>
      <div className="container d-flex flex-column align-items-center py-5">
        {/* Problem Title */}
        <div className="problem-container p-4 text-center">
          <h3 className="problem-title">Problem Title: Dining Philosopher</h3>

          {/* Problem Description */}
          <div className="problem-description text-start">
            <p>
              The <strong>Dining Philosophers Problem</strong> is a classic
              synchronization problem in concurrency. It involves{" "}
              <strong>five philosophers</strong> seated around a circular table,
              each alternating between <strong>thinking</strong> and{" "}
              <strong>eating</strong>. They require two{" "}
              <strong>shared chopsticks</strong> to eat, but each philosopher
              can only pick up one at a time. This leads to{" "}
              <strong>race conditions, deadlocks, and starvation</strong> if not
              handled properly.
            </p>
            <p>
              The challenge is to{" "}
              <strong>design a solution that prevents deadlocks</strong>, avoids
              starvation, and ensures that every philosopher gets a fair chance
              to eat while minimizing blocking.
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
                  <div className="d-flex justify-content-center">
                    <img
                      src={cpuGraph}
                      alt="CPU Profiling Graph"
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>

              {/* Memory Usage Graph */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Memory Usage</h5>
                  <div className="d-flex justify-content-center">
                    <img
                      src={memoryGraph}
                      alt="Memory Usage Graph"
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}