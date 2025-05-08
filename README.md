# 🧠 CNN-Based Microscopic Cell Image Classifier – Frontend

This project is the frontend interface for an automated classification system that uses a Convolutional Neural Network (CNN) to analyze microscopic cell images for cancer diagnosis.

Users can upload an image of a cell through this web interface. The image is then sent to a backend API, where a trained CNN model performs inference and returns the prediction result, which is displayed on the frontend.

---

## 🚀 Tech Stack

- **React** – Frontend library for building the UI  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **Axios** – HTTP client to communicate with the backend  
- **React Router** – For routing between different views/pages

---

## 📸 Functionality

- Upload microscopic cell image
- Send image to backend CNN model via API
- Display predicted result on the frontend

---
## Backend Integration
The frontend sends uploaded images to a backend API (built with Express.js) that hosts the CNN model. The backend performs image classification and responds with the prediction result, which is then rendered in the frontend UI.

Ensure that the backend server is running and the API endpoint is correctly configured in your frontend code.

## 🛠️ Installation and Running Locally - Frontend(Client-side) repo

Follow these steps to run the frontend locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the project directory
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

