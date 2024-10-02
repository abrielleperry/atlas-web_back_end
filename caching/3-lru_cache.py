#!/usr/bin/python3
"""inherits from BaseCaching and implements a LIFO caching strategy"""
from base_caching import BaseCaching


class LRUCache(BaseCaching):
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
                self.order.remove(key)
            self.cache_data[key] = item
            self.order.append(key)
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                least_key = self.order.pop(0)
                del self.cache_data[least_key]
                print(f"DISCARD: {least_key}")

    def get(self, key):
        """_summary_

        Args:
            key (_type_): _description_

        Returns:
            _type_: _description_
        """
        if key is None or key not in self.cache_data:
            return None
        self.order.remove(key)
        self.order.append(key)
        return self.cache_data[key]
