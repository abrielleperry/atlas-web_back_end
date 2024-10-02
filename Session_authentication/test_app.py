import unittest
from flask import Flask
from api.v1.app import app


class TestUnauthorizedEndpoint(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_unauthorized_endpoint(self):
        response = self.app.get("/api/v1/unauthorized")
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.content_type, "application/json")
        self.assertEqual(response.json, {"error": "Unauthorized"})


if __name__ == "__main__":
    unittest.main()
