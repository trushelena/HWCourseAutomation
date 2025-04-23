# 🧪 Final Project: Automated Testing Framework

This repository contains an automated testing framework that integrates **UI and API test automation** using TypeScript. The project is designed to test the Qase.io https://app.qase.io/ application and includes:

- ✅ UI tests using **Playwright**
- ✅ API tests using **Mocha** + **Axios**
- ✅ Unified reporting with **Allure**

---

## 🚀 Technologies Used

| Area         | Technology            |
|--------------|------------------------|
| Programming  | TypeScript             |
| UI Testing   | Playwright             |
| API Testing  | Mocha, Axios           |
| Reporting    | Allure (UI + API)      |
| Linting      | ESLint, Prettier       |
| Package Mgmt | NPM                    |

---

## 📦 How to Get Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/finalProject.git
cd finalProject
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root of the project and add your config (e.g. API tokens, base URLs):

```env
API_TOKEN=your-token-here (you can generate your own token here: https://app.qase.io/user/api/token)
BASE_URL=https://api.qase.io/v1
```

### 4. Run Tests

#### Run UI tests:
```bash
npm run test
```

#### Run API tests:
```bash
npm run test:api
```

#### Run both UI and API tests:
```bash
npm run test:all
```

### 5. Generate Allure Report
```bash
npm run report
```

---

## 📁 Project Structure

```
finalProject/
├── src/                      # Services, DTOs, APIs, Pages and Elements
├── tests/                    # Tests for UI and API
│   ├── api/                  # Mocha API tests
│   └── ui/                   # Playwright UI tests
├── .env                     # Environment file (not committed)
├── .mocharc.js              # Mocha config
├── tsconfig.json            # TypeScript config
├── package.json             # NPM scripts and dependencies
└── allure-results/          # Allure raw results (auto-generated)
```

---

## 📌 Notes
- API tests are integrated with Allure using `allure-mocha`
- Playwright tests generate video/screenshot artifacts
- Use `npm run test:all` before generating Allure report to include both UI and API results

---

Made with ❤️ for QA Automation Training from robot_dreams

