#!/usr/bin/env python3
"""function to_kv that takes a string k and an
int OR float v as arguments and returns a tuple"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """key and value pair converted into tuple rep

    Args:
        k (str): key in tuple
        v (Union[int, float]): value to square and put in tuple

    Returns:
        Tuple[str, float]: tuple containing key and squared value
    """
    return (k, v ** 2)
