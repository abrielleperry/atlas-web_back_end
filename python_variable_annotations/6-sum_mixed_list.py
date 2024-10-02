#!/usr/bin/env python3
"""func sum_mixed_list takes a list mxd_lst of ints and floats
and returns their sum as a float."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ sum of a list holding ints and floats

    Args:
        mxd_lst (List[int]): list of ints and floats

    Returns: sum of list as float
    """
    return sum(mxd_lst)
