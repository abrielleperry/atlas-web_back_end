#!/usr/bin/python3
"""class FIFOCache that inherits from BaseCaching and is a caching system"""
from base_caching import BaseCaching

"""When the cache is full, the first item added is removed to make space for
new values. The difference between LRU and FIFO is that LRU keeps
recently used items in the cache, while FIFO discards the
oldest item regardless of use."""


class FIFOCache(BaseCaching):
    """inherits from BaseCaching and implements a FIFO caching strategy.
    When the cache reaches its maximum size, it discards the oldest item to
    make room for new ones, regardless of their usage frequency.
    """

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
                discarded = self.order.pop(0)
                del self.cache_data[discarded]
                print(f"DISCARD: {discarded}")

    def get(self, key):
        """gets item from cache based on given key

        Args:
            key: key of item to get from cache

        Returns:
            any: value associated w key if found in cache or None if not found
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
