import requests
import sys
from datetime import datetime
import json

class InsurricaAPITester:
    def __init__(self, base_url="http://localhost:8000/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_result(self, test_name, success, message, response_data=None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "response_data": response_data
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {test_name}: {message}")
        if response_data:
            print(f"    Response: {json.dumps(response_data, indent=2)}")

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Insurrica API":
                    self.log_result("API Root", True, "Root endpoint working correctly", data)
                    return True
                else:
                    self.log_result("API Root", False, f"Unexpected response: {data}")
            else:
                self.log_result("API Root", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_result("API Root", False, f"Request failed: {str(e)}")
        return False

    def test_create_lead(self, name="Test User", phone="9876543210", product="health"):
        """Test lead creation"""
        payload = {
            "name": name,
            "phone": phone,
            "insurance_product": product
        }
        
        try:
            response = requests.post(f"{self.base_url}/leads", json=payload, timeout=10)
            if response.status_code == 200:
                data = response.json()
                if "id" in data and data["name"] == name:
                    self.log_result("Create Lead", True, "Lead created successfully", {"id": data["id"], "name": data["name"]})
                    return data["id"]
                else:
                    self.log_result("Create Lead", False, f"Invalid response structure: {data}")
            else:
                self.log_result("Create Lead", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_result("Create Lead", False, f"Request failed: {str(e)}")
        return None

    def test_get_leads(self):
        """Test getting all leads"""
        try:
            response = requests.get(f"{self.base_url}/leads", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Get Leads", True, f"Retrieved {len(data)} leads", {"count": len(data)})
                    return True
                else:
                    self.log_result("Get Leads", False, f"Expected list, got: {type(data)}")
            else:
                self.log_result("Get Leads", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_result("Get Leads", False, f"Request failed: {str(e)}")
        return False

    def test_get_leads_count(self):
        """Test getting leads count"""
        try:
            response = requests.get(f"{self.base_url}/leads/count", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if "count" in data and isinstance(data["count"], int):
                    self.log_result("Get Leads Count", True, f"Count endpoint working: {data['count']} leads", data)
                    return True
                else:
                    self.log_result("Get Leads Count", False, f"Invalid response structure: {data}")
            else:
                self.log_result("Get Leads Count", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_result("Get Leads Count", False, f"Request failed: {str(e)}")
        return False

    def test_lead_validation(self):
        """Test lead form validation"""
        # Test missing fields
        invalid_payloads = [
            {"name": "", "phone": "9876543210", "insurance_product": "health"},  # empty name
            {"name": "Test", "phone": "", "insurance_product": "health"},  # empty phone  
            {"name": "Test", "phone": "9876543210", "insurance_product": ""},  # empty product
            {"name": "Test", "phone": "123", "insurance_product": "health"},  # short phone
        ]
        
        for i, payload in enumerate(invalid_payloads):
            try:
                response = requests.post(f"{self.base_url}/leads", json=payload, timeout=10)
                # Backend might not have validation, so we'll check what happens
                if response.status_code == 422:  # Validation error expected
                    self.log_result(f"Validation Test {i+1}", True, "Validation working correctly")
                elif response.status_code == 200:
                    self.log_result(f"Validation Test {i+1}", False, "No validation - invalid data accepted")
                else:
                    self.log_result(f"Validation Test {i+1}", False, f"Unexpected response: {response.status_code}")
            except Exception as e:
                self.log_result(f"Validation Test {i+1}", False, f"Request failed: {str(e)}")

    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting Insurrica API Tests")
        print(f"Base URL: {self.base_url}")
        print("-" * 50)
        
        # Test API availability
        if not self.test_api_root():
            print("❌ API is not accessible. Stopping tests.")
            return False
            
        # Test CRUD operations
        self.test_create_lead()
        self.test_get_leads()
        self.test_get_leads_count()
        
        # Test different insurance products
        products = ["motor", "life", "term", "travel", "home", "business"]
        for product in products:
            self.test_create_lead(f"Test {product.title()}", "9876543210", product)
        
        # Test validation
        self.test_lead_validation()
        
        return True

    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 50)
        print(f"📊 TEST SUMMARY")
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return 0
        else:
            print("⚠️  Some tests failed. Check logs above.")
            return 1

def main():
    tester = InsurricaAPITester()
    
    if tester.run_all_tests():
        return tester.print_summary()
    else:
        print("🔥 Critical failure - API not reachable")
        return 1

if __name__ == "__main__":
    sys.exit(main())