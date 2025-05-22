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

.
├── src/            
│   ├── Assets/
|   |  ├── cpp_graphs/
│   |  ├── go_graphs/
│   ├── Screens/
|   |  ├── problem.js/        #contains all problems js files
|   ├── Styling/
|   |  ├── Main.css/      
│   ├── App.js/  
│   ├── App.css/  
│   ├── index.js/    
│   ├── index.css/      
└── 

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
