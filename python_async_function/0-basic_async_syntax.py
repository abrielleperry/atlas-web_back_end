#!/usr/bin/env python3
""" wait_random waits for a random amount of time then returns delayed time"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """waits for random delay between 0 and 10

    Args:
        max_delay (int, optional): Defaults to 10.

    Returns:
        float: delay seconds waited
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
