#!/usr/bin/env python3
"""func sum_list takes list input_list of floats as
arg and returns sum as float"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """ input_list is list of floats

    Args:
        input_list (List[float]): list of floats

    Returns:
        float: sum of floats from list
    """
    return sum(input_list)
