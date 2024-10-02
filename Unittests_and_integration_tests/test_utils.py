#!/usr/bin/env python3
""" Unittests and Integration Tests"""
import unittest
from parameterized import parameterized
from utils import access_nested_map, get_json, memoize
from unittest.mock import patch, Mock


class TestAccessNestedMap(unittest.TestCase):
    """test case class TestAccessNestedMap inherits from unittest.TestCase"""

    """parameter decorator for testing with three sets of args
    first arg is a dictionary
    second arg is a tuple
    third arg is the expected result"""
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """method test_access_nested_map defines actual test func
        takes 3 params corresponding to ones in parameterized.expand
        calls access_nested_map with nested_map and path and
        compares to expected result"""
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({"a": {}}, ("a", "b")),
        ({"a": {"b": {}}}, ("a", "b", "c")),
        ])
    def test_access_nested_map_exception(self, nested_map, path):
        """ test cases where keyerror should be raised
        Args:
            self: instance of test case class
            nested_map (_type_): dictionary representing the nested map
            path (_type_): tuple representing the path to access in nested_map
        """
        with self.assertRaises(KeyError) as context:
            access_nested_map(nested_map, path)
        self.assertEqual(str(context.exception), f"'{path[-1]}'")


""" GET JSON FUNCTION TESTS -
makes HTTP GET request to a given URL and returns the response in JSON format
def get_json(url: str) -> Dict:
    response = requests.get(url)
    return response.json()
"""


class TestGetJson(unittest.TestCase):
    """ test the get_json function """
    @parameterized.expand([
            ("http://example.com", {"payload": True}),
            ("http://holberton.io", {"payload": False}),
        ])
    def test_get_json(self, test_url, test_payload):
        """ test get_json func with mock http resopnses"""
        with patch('utils.requests.get') as mock_get:
            mock_response = Mock()
            mock_response.json.return_value = test_payload
            mock_get.return_value = mock_response
            result = get_json(test_url)
            mock_get.assert_called_once_with(test_url)
            self.assertEqual(result, test_payload)


class TestMemoize(unittest.TestCase):
    """ test the memoize decorator """
    def test_memoize(self):
        """ test that memoize decorator stores result of func """
        class TestClass:
            """ class to test memoize decor """
            def a_method(self):
                """ method to test memoize decor """
                return 42

            @memoize
            def a_property(self):
                """ method to test memoize decor """
                return self.a_method()
        with patch.object(TestClass,
                          'a_method',
                          return_value=42) as mock_method:
            instance = TestClass()
            result_1 = instance.a_property
            result_2 = instance.a_property
            self.assertEqual(result_1, 42)
            self.assertEqual(result_2, 42)
            mock_method.assert_called_once()


if __name__ == "__main__":
    unittest.main()
