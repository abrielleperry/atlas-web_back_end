#!/usr/bin/env python3
""" Asynchronous coroutine that loops 10 times each time asynchronously
waits 1 second then yields a random number between 0 and 10"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Asynchronous coroutine that loops 10 times, each time waits 1 second
    and yields a random number between 0 and 10"""
    for i in range(10):
        await asyncio.sleep(1)  # wait/sleep for 1 second
        yield random.uniform(0, 10)  # yield random float between 0 and 10
