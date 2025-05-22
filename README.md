# Concurrent Programming Solutions in C++ and Go

This project explores and implements various classical concurrent programming problems in both C++ and Go. It provides practical solutions for scenarios like the Reader-Writer Problem, Producer-Consumer Problem, Dining Philosophers Problem, and Dining Savages Problem.

A key aspect of this project is the performance analysis of these concurrent solutions in both languages. The `.exe` executables generated from the C++ and Go implementations were run and managed using a Flask Python application. This setup enabled a systematic approach to measure execution times and collect data on CPU/resource usage and memory consumption.


## Features

- **Concurrent Solutions:** Implementations of classic concurrency problems.
- **C++ and Go:** Solutions provided in both high-performance languages.
- **Flask Integration:** Python Flask application used to orchestrate and run executables.
- **Performance Benchmarking:** Measurement of execution times for C++ and Go solutions.
- **Resource Monitoring:** Data collection on CPU, resource, and memory usage.
- **Graphical Analysis:** Visualization of performance metrics through graphs.

## Problems Implemented

The project includes concurrent solutions for the following problems:

- **Reader-Writer Problem:** Demonstrates safe access to shared data by multiple readers and writers.
- **Producer-Consumer Problem:** Illustrates synchronization between threads producing and consuming data.
- **Dining Philosophers Problem:** Addresses deadlock and starvation issues in resource allocation.
- **Dining Savages Problem:** A variation of the producer-consumer problem with specific synchronization challenges.

## Performance Analysis

A significant part of this project involves analyzing the performance characteristics of concurrent solutions in C++ and Go.

- **Execution Time:** The time taken for each concurrent solution to complete was measured.
- **CPU/Resource Usage:** Metrics related to CPU utilization and overall system resource consumption were collected.
- **Memory Usage:** The memory footprint of the running concurrent programs was monitored.

These measurements provide insights into the efficiency and resource demands of concurrency models in C++ versus Go.

## Project Structure

The project is organized as follows:

It looks like the project structure you provided is incomplete and has some unusual elements (e.g., problem.js/ as a file and Main.css/ as a file). However, I'll do my best to interpret it and update the README.md to reflect a more typical web-based project structure, assuming src/ contains a React or similar frontend application, and the .exe running is handled by a backend (perhaps the Flask app from the previous prompt, which isn't explicitly in this structure).

Here's an updated README.md focusing on a more plausible interpretation of your new structure:

Markdown

# Concurrent Programming Solutions: Performance Analysis

This project showcases implementations of classic concurrent programming problems in C++ and Go, with a focus on analyzing their performance characteristics. The results of these analyses, including execution times, CPU/resource usage, and memory consumption, are visualized and presented through a web interface.

---

## Table of Contents

-   [Features](#features)
-   [Problems Implemented](#problems-implemented)
-   [Performance Analysis](#performance-analysis)
-   [Project Structure](#project-structure)
-   [Setup and Running](#setup-and-running)
-   [Results and Analysis](#results-and-analysis)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

---

## Features

-   **Concurrent Solutions:** Practical implementations of classic concurrency problems in C++ and Go.
-   **Performance Benchmarking:** Automated measurement of execution times, CPU/resource usage, and memory consumption for both language implementations.
-   **Web-based Visualization:** A dedicated frontend to display performance graphs (CPU, memory, execution time) for each problem and language.
-   **Dynamic Problem Selection:** Users can select and view performance data for different concurrent problems.

---

## Problems Implemented

The project includes concurrent solutions for the following classic problems:

-   **Reader-Writer Problem:** Demonstrates controlled access to shared data.
-   **Producer-Consumer Problem:** Illustrates synchronization between data generators and consumers.
-   **Dining Philosophers Problem:** Addresses deadlock and starvation in resource sharing.
-   **Dining Savages Problem:** A variant of the producer-consumer problem with specific synchronization rules.

---

## Performance Analysis

A core component of this project is the comprehensive performance analysis:

-   **Execution Time:** Measures how long each concurrent solution takes to complete.
-   **CPU/Resource Usage:** Monitors CPU utilization and overall system resource consumption during execution.
-   **Memory Usage:** Tracks the memory footprint of the running programs.

These metrics provide valuable insights into the efficiency and resource demands of C++ versus Go for concurrent programming tasks. The analysis results are presented visually through graphs.

---

## Project Structure

This project is structured as follows:

You are absolutely right, and I apologize for the persistent formatting issue! It seems my previous attempts to render the tree structure in plain text were breaking.

The most common reason for this is that plain text renderers often remove leading spaces, which are crucial for tree command style output.

Let's try a different approach to ensure it renders correctly in a README.md file. I will use a simple, explicit indentation, and specify a code block for the structure.

Here's the corrected README.md with the file structure explicitly laid out to avoid rendering issues:

Markdown

# Concurrent Programming Solutions: Performance Visualization

This project provides a web-based platform to visualize the performance characteristics of classic concurrent programming problems implemented in C++ and Go. While the core concurrent solutions are handled by separate backend processes, this repository focuses on the frontend application responsible for displaying the collected performance data, including execution times, CPU/resource usage, and memory consumption, through intuitive graphs.

---

## Table of Contents

-   [Features](#features)
-   [Problems Visualized](#problems-visualized)
-   [Performance Metrics Displayed](#performance-metrics-displayed)
-   [Project Structure](#project-structure)
-   [Setup and Running](#setup-and-running)
-   [Backend Integration (Conceptual)](#backend-integration-conceptual)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

---

## Features

-   **Web-based Visualization:** An interactive frontend application built to display performance graphs.
-   **Comparative Analysis:** View and compare performance metrics for C++ and Go implementations side-by-side.
-   **Problem-Specific Views:** Navigate through different concurrent problems to see their respective performance data.
-   **Clear Graphing:** Utilizes modern charting libraries to present CPU usage, memory usage, and execution time clearly.

---

## Problems Visualized

This application is designed to display performance data for concurrent solutions to the following classic problems:

-   **Reader-Writer Problem:** Safe access to shared data.
-   **Producer-Consumer Problem:** Synchronization between data generators and consumers.
-   **Dining Philosophers Problem:** Resource allocation and deadlock avoidance.
-   **Dining Savages Problem:** A variation on producer-consumer with unique synchronization.

---

## Performance Metrics Displayed

The frontend visualizes the following key performance metrics, which are generated by the backend processes running the C++ and Go executables:

-   **Execution Time:** The total time taken for each concurrent solution to complete.
-   **CPU/Resource Usage:** Graphs showing CPU utilization and overall system resource consumption.
-   **Memory Usage:** Charts illustrating the memory footprint of the running programs.

These visualizations help in understanding the performance trade-offs and efficiencies of C++ versus Go for common concurrent programming challenges.

---

## Project Structure

This repository contains the **frontend application** with the following structure:

.
├── src/
│   ├── Assets/
│   │   ├── cpp_graphs/             # Stores generated C++ performance graph images (e.g., .png, .svg)
│   │   └── go_graphs/              # Stores generated Go performance graph images (e.g., .png, .svg)
│   ├── Screens/
│   │   └── problem.js              # React component(s) for displaying individual problem data and graphs
│   ├── Styling/
│   │   └── Main.css                # Main application-wide stylesheet
│   ├── App.js                      # Root React component of the application
│   ├── App.css                     # Stylesheet for the App component
│   ├── index.js                    # Entry point for the React application (ReactDOM.render)
│   └── index.css                   # Global stylesheet for the HTML document
└── README.md                       # This README file

## Setup and Running

To set up and run this project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Build C++ Executables:**
    Use the problems given and build the executables. You will need a C++ compiler (e.g., g++).
    ```bash
    # Example for one solution
    g++ -pthread -o reader_writer reader_writer.cpp
    go build -o my_program.exe my_program.go
    ```
    Ensure the compiled `.exe` files are accessible by the Flask application (or placed in a designated `backend/cpp` directory).

3.  **Build Go Executables:**
    Navigate to each Go solution directory (`backend/go`) and build the executables. You will need the Go toolchain.
    ```bash
    # Example for one solution
     go build -o my_program.exe my_program.go
    ```
    Ensure the compiled executables are accessible by the Flask application.

4.  **Install Python Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the Flask Application:**
    ```bash
    cd flask_app
    python app.py     #For c++
    python goApp.py   #For Go
    ```
    The Flask application will typically run on `http://127.0.0.1:5000`. Access this URL in your web browser to interact with the application and trigger the execution of the concurrent solutions.

6.  **Run Analysis Scripts:**
    After collecting data through the Flask application, navigate to the `src/assets` directory for graphs.
    # The graphs are created by separated tools and they cannot be created at runtime so we added the graphs for display.

## Results and Analysis

The `src/assets` directory will contain the raw performance data collected from difference performance tools. The `src/assets` will show various graphs (for execution time, line graphs for CPU/memory usage over time) illustrating the performance characteristics of C++ and Go solutions for each problem.

## Technologies Used

-   **C++:** For high-performance concurrent implementations, thanks to it's thread support.
-   **Go:** For efficient and idiomatic concurrent implementations, through Go-routines.
-   **Python:**
    -   **Flask:** Web framework for running and managing executables.

## Contributing

Contributions to this project are welcome! If you have suggestions for improvements, new concurrent problems to implement, or better analysis techniques, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE)       
