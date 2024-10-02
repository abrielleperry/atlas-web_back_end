#!/usr/bin/env python3
""" async_comprehension coroutine is defined to collect 10 random numbers
generated by async_generator """
import importlib
import asyncio
from typing import List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """ collect 10 random nums and return them in as list """
    # collect 10 numbers from async_generator
    result = [i async for i in async_generator()]
    return result
