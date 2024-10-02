#!/usr/bin/python3
"""inherits from BaseCaching and implements a LIFO caching strategy"""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """When the cache reaches its maximum size, it discards the most recently
    added item"""

    def __init__(self):
        super().__init__()
        self.order = []

    def put(self, key, item):
        """_summary_

        Args:
            key (_type_): _description_
            item (_type_): _description_
        """
        if key is not None and item is not None:
            if key in self.cache_data:
                return
            if key not in self.cache_data:
                self.order.append(key)
                self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                last_key = self.order.pop(-2)
                del self.cache_data[last_key]
                print(f"DISCARD: {last_key}")

    def get(self, key):
        """_summary_

        Args:
            key (_type_): _description_

        Returns:
            _type_: _description_
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
