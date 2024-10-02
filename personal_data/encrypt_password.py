#!/usr/bin/env python3
"""function for encrypting passwords"""
import bcrypt


def hash_password(password: str) -> bytes:
    """returns a hashed password that is a byte string"""
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt)


def is_valid(hashed_password: bytes, password: str) -> bool:
    """returns"""
    return bcrypt.checkpw(password.encode("utf-8"), hashed_password)
