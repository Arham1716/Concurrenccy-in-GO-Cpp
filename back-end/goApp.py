from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import subprocess
import os
import time
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS

# Define the relative path to the executable


@app.route('/DiningPhilosopher', methods=['GET'])
def run_DP_exe():
    logger.info("Received request for Dining Philosopher Go implementation")
    exe_path = os.path.join(os.path.dirname(__file__), "go", "DinningPhilosiphers.exe")
    if not os.path.exists(exe_path):
        logger.error(f"Executable not found at: {exe_path}")
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()
        logger.info("Starting execution of Go program")

        # Run the Go executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)
        logger.info("Go program executed successfully")

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        logger.error(f"Error running Go program: {e.stderr}")
        return jsonify({"error": e.stderr}), 500
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return jsonify({"error": str(e)}), 500
    
@app.route('/CigSmokers', methods=['GET'])
def run_CS_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "CigSmoking.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500
    
@app.route('/SantaClause', methods=['GET'])
def run_SC_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "SantaClause.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500
    

@app.route('/DinningSavages', methods=['GET'])
def run_DS_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "DinningSavages.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500
    


@app.route('/FIFOBarberShop', methods=['GET'])
def run_BS_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "FIFOBarberShop.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500



@app.route('/RiverCrossing', methods=['GET'])
def run_RC_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "RiverCrossing.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500
    



@app.route('/ProducerConsumer', methods=['GET'])
def run_PC_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "ProducerConsumer.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500
    



@app.route('/ReaderWriter', methods=['GET'])
def run_RW_exe():
    exe_path = os.path.join(os.path.dirname(__file__), "go", "ReaderWriter.exe")
    if not os.path.exists(exe_path):
        return jsonify({"error": "Executable not found in the 'go' folder"}), 404

    try:
        # Start timing
        start_time = time.time()

        # Run the C++ executable
        result = subprocess.run(exe_path, capture_output=True, text=True, check=True)

        # End timing
        end_time = time.time()
        execution_time = end_time - start_time

        return jsonify({
            "output": result.stdout,
            "execution_time": f"{execution_time:.6f} seconds"
        })

    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.stderr}), 500



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
