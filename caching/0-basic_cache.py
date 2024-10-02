#!/usr/bin/python3
"""class BasicCache that inherits from BaseCaching and is a caching system"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ A simple caching system that doesnt have a size limit

    Attrs:
    cache_data (dict): The underlying(in parent class)
    dict storing cached items"""
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """adds item to the cache

        Args:
            key (_type_): key to associate w item
            item (_type_): value to store in the cache
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """ gets an item from the cache

        Args:
            key (_type_): key of item to get

        Returns:
            any: value associated w the key or None if not found
        """
        return self.cache_data.get(key)
