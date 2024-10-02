#!/usr/bin/env python3
"""function make_multiplier takes float multiplier as arg
and returns a func that multiplies float by multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """creates and returns a func that multiplies
    any float by a specified multiplier

    Args:
        multiplier (float): number that will be multipled by any input numbers

    Returns:
        Callable[[float], float]: a func that takes float arg
        and returns value of arg and multiplier
    """
    return lambda x: x * multiplier
